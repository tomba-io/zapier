require("should");

const zapier = require("zapier-platform-core");

const App = require("../../index");
const appTester = zapier.createAppTester(App);

describe("Search - companies", () => {
  zapier.tools.env.inject();

  it("should get an array", async () => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY,
        secret_key: process.env.SECRET_KEY,
      },

      inputData: {
        query: "E-commerce companies using Shopify",
      },
    };

    const results = await appTester(
      App.searches["companies"].operation.perform,
      bundle,
    );
    results.should.be.an.Array();
    results.length.should.be.aboveOrEqual(1);
    results[0].should.have.property("success");
    results[0].should.have.property("data");
    results[0].data.should.have.property("companies");
    results[0].data.companies.should.be.an.Array();
  });
});
