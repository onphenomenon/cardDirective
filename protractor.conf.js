exports.config = {
  specs: ['tests/e2espec.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:8000/',
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    print: function() {}
  },
  framework: 'jasmine2',
  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  }
};
