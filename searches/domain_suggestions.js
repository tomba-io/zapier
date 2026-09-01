const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/domain-suggestions`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {
      query: bundle.inputData.query,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    return [results];
  });
};

module.exports = {
  operation: {
    perform: perform,
    cleanInputData: false,
    inputFields: [
      {
        key: "query",
        label: "Query",
        type: "string",
        helpText:
          'Search query to find domain suggestions (e.g., "google").',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: [
        {
          website_url: "google.com",
          name: "Google",
        },
        {
          website_url: "google.co.uk",
          name: "Google UK",
        },
      ],
    },
    outputFields: [
      { key: "data__website_url", type: "string" },
      { key: "data__name", type: "string" },
    ],
  },
  key: "domain_suggestions",
  noun: "Domain",
  display: {
    label: "Domain Suggestions",
    description:
      "Search for domain suggestions based on a query keyword.",
    hidden: false,
  },
};
