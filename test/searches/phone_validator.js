require("should");

const zapier = require("zapier-platform-core");

const App = require("../../index");
const appTester = zapier.createAppTester(App);

describe("Search - phone_validator", () => {
  zapier.tools.env.inject();

  it("should get an array", async () => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY,
        secret_key: process.env.SECRET_KEY,
      },

      inputData: {
        phone: "+33612345678",
      },
    };

    const results = await appTester(
      App.searches["phone_validator"].operation.perform,
      bundle
    );
    results.should.be.an.Array();
    results.length.should.be.aboveOrEqual(1);
    results[0].should.have.property("data");
  });
});
