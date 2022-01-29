require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Create - Domain_status', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY,
        secret_key: process.env.SECRET_KEY,
      },

      inputData: {
        domain: 'gmail.com'
      },
    };

    const result = await appTester(
      App.creates['Domain_status'].operation.perform,
      bundle
    );
    result.should.not.be.an.Array();
  });
});
