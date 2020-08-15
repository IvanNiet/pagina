// Carga python y todas las librerías que necesitamos.
languagePluginLoader.then(() => {
    // console.log(pyodide.runPython('import sys\nsys.version')); // Python 3.7.4

    pyodide.loadPackage(['pandas', 'matplotlib', 'numpy']).then(() => {
        document.getElementById('ejecutar-codigo').style.display = 'inline-block';
        document.getElementById('restablecer-codigo').style.display = 'inline-block';
        editor.setOption('readOnly', false);
    });

});
