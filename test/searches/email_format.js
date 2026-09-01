require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Search - email_format', () => {
  zapier.tools.env.inject();

  it('should get an array', async () => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY,
        secret_key: process.env.SECRET_KEY,
      },

      inputData: {
        domain: 'tomba.io',
      },
    };

    const results = await appTester(
      App.searches['email_format'].operation.perform,
      bundle
    );
    results.should.be.an.Array();
  });
});
