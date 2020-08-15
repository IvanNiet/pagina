var editor;

// Carga python y todas las librerías que necesitamos.
languagePluginLoader.then(() => {
    // console.log(pyodide.runPython('import sys\nsys.version')); // Python 3.7.4

    pyodide.loadPackage(['pandas', 'matplotlib', 'numpy']).then(() => {
        editor = CodeMirror.fromTextArea(document.getElementById('code'), {
            mode: {
                name: "python",
            version: 3,
                singleLineStrinxgErrors: false
            },
            lineNumbers: true,
            indentUnit: 4,
            matchBrackets: true
        });
        editor.setSize(null, "20em");

        document.getElementById('espacio-de-codigo').style.visibility = 'visible';
        document.getElementById('h4-codigo').innerHTML = 'Código';
    });

});

// Ejecuta el código
function runCode() {
    pyodide.runPython(editor.doc.getValue());
    document.getElementById('mensaje-ejecutando').innerHTML = 'Listo!';

    let graficas = document.getElementById('graficas');
    graficas.innerHTML = '';

    for (var img in pyodide.globals.GRAFICAS) {
        graficas.innerHTML += '<img src="' + pyodide.globals.GRAFICAS[img] + '">';
    }

    graficas.scrollIntoView();
}

function resetCode() {
    editor.setValue(`import matplotlib.pyplot as plt
import io, base64

GRAFICAS = []

for i in ([1, 2, 3], [2, 5, -3], [5, 10, -2, -20]):
    fig, ax = plt.subplots()
    ax.plot(i)

    buf = io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    GRAFICAS.append('data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8'))

`);
}

resetCode();
