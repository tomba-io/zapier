require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Search - email_sources', () => {
  zapier.tools.env.inject();

  it('should get an array', async () => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY,
        secret_key: process.env.SECRET_KEY,
      },

      inputData: {
        email: 'b.mohamed@tomba.io',
      },
    };

    const results = await appTester(
      App.searches['email_sources'].operation.perform,
      bundle
    );
    results.should.be.an.Array();
  });
});
