module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'build/classes/kotlin/main/dependencies/**/*.js',
      'build/classes/kotlin/main/*.js',
      'build/classes/kotlin/test/dependencies/**/*.js',
      'build/classes/kotlin/test/*.js'
    ],
    frameworks: ['mocha'],
    reporters: ['mocha'],
    browsers: [
      'Chrome'
    ],
    singleRun: true
  });
};
