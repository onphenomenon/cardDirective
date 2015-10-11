exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/card-spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true
  }
};
