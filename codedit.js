var editor;

// Carga python y todas las librerías que necesitamos.
languagePluginLoader.then(() => {
    console.log(pyodide.runPython('import sys\nsys.version'));
    pyodide.loadPackage(['pandas', 'matplotlib', 'numpy']).then(() => {
        editor = CodeMirror.fromTextArea(document.getElementById('code'), {
            mode: {name: "python",
                version: 3,
                singleLineStringErrors: false},
            lineNumbers: true,
            indentUnit: 4,
            matchBrackets: true
        });
        editor.setSize(null, "20em");

        document.getElementById('ejecutar-codigo').disabled = false;
    });
});

// Ejecuta el código
function run() {
    var code = editor.doc.getValue();
    pyodide.runPython(code);

    document.getElementById('grafica').src=pyodide.globals.img_str;
}