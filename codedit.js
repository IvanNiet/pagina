// Carga python y todas las librerías que necesitamos.
languagePluginLoader.then(() => {
    console.log(pyodide.runPython('import sys\nsys.version'));
    pyodide.loadPackage(['pandas', 'matplotlib']);
});

// Ejecuta el código
function run() {
    var code = editor.doc.getValue();
    pyodide.runPython(code);
}