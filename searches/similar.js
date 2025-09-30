const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/similar`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {
      domain: bundle.inputData.domain,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return [results];
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: "domain",
        label: "Domain",
        type: "string",
        helpText:
          "Domain name to retrieve similar domains for (e.g., 'google.com').",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: [
        {
          website_url: "similar-example.com",
          name: "Similar Example Corp",
        },
        {
          website_url: "example-clone.com",
          name: "Example Clone Inc",
        },
      ],
    },
    outputFields: [
      { key: "data__website_url", type: "string" },
      { key: "data__name", type: "string" },
    ],
  },
  key: "similar",
  noun: "Similar Domains",
  display: {
    label: "Similar Domains",
    description: "Retrieve similar domains based on a specific domain.",
    hidden: false,
    important: true,
  },
};
