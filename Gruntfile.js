module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.initConfig({

    karma: {
        options: {
          configFile: 'karma-unit.js'
        },
        unit: {
          singleRun: true

      }
    },

    protractor: {
      options: {
        configFile: "protractor.conf.js",
        noColor: false,
      }
    }
  });


};
