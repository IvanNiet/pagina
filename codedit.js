languagePluginLoader.then(() => {
    console.log(pyodide.runPython('import sys\nsys.version'));
});
