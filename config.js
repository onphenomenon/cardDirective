exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://127.0.0.1:8000/#/easy'
  specs: ['tests/card-spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true
  }
};
