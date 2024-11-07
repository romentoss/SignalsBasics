module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'], // Incluimos requirejs
    files: [
      // Agrega aquí los archivos necesarios para los tests
      { pattern: 'src/**/*.js', included: false },
      { pattern: 'test/**/*.spec.js', included: false },

      // Archivo de configuración principal para Require.js que cargará las dependencias
      'test/test-main.js'
    ],
    exclude: [
      // Excluye archivos innecesarios o problemáticos para los tests
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};
