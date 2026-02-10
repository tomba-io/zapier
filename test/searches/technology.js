require("should");

const zapier = require("zapier-platform-core");

const App = require("../../index");
const appTester = zapier.createAppTester(App);

describe("Search - technology", () => {
  zapier.tools.env.inject();

  it("should get an array", async () => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY,
        secret_key: process.env.SECRET_KEY,
      },

      inputData: {
        domain: "shopify.com",
      },
    };

    const results = await appTester(
      App.searches["technology"].operation.perform,
      bundle,
    );
    results.should.be.an.Array();
    results.length.should.be.aboveOrEqual(1);
    results[0].should.have.property("domain");
    results[0].should.have.property("data");
    results[0].data.should.be.an.Array();
  });
});
