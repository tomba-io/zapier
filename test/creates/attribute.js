require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');

describe('Create - attribute', () => {
  zapier.tools.env.inject();

  it('should load without errors', () => {
    const module = require('../../creates/attribute');
    module.should.have.property('operation');
    module.operation.should.have.property('perform');
    module.operation.should.have.property('inputFields');
  });
});
