require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');

describe('Create - leads_list', () => {
  zapier.tools.env.inject();

  it('should load without errors', () => {
    const module = require('../../creates/leads_list');
    module.should.have.property('operation');
    module.operation.should.have.property('perform');
    module.operation.should.have.property('inputFields');
  });
});
