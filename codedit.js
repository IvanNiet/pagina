var editor;

// Carga python y todas las librerías que necesitamos.
languagePluginLoader.then(() => {
    // console.log(pyodide.runPython('import sys\nsys.version')); // Python 3.7.4

    pyodide.loadPackage(['pandas', 'matplotlib', 'numpy']).then(() => {
        editor = CodeMirror.fromTextArea(document.getElementById('code'), {
            mode: {name: "python",
            version: 3,
                singleLineStrinxgErrors: false},
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
function run() {
    pyodide.runPython(editor.doc.getValue());
    document.getElementById('mensaje-ejecutando').innerHTML = 'Listo!';

    grafica = document.getElementById('grafica');
    grafica.style.visibility = 'visible';
    grafica.src=pyodide.globals.img_str;

    grafica.scrollIntoView(false);
}