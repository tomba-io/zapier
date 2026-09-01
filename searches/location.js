const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/location`,
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

    return [results];
  });
};

module.exports = {
  operation: {
    perform: perform,
    cleanInputData: false,
    inputFields: [
      {
        key: "domain",
        label: "Domain",
        type: "string",
        helpText:
          'Domain name to find employee locations for (e.g., "google.com").',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        domain: "google.com",
        locations: [
          {
            country: "US",
            city: "Mountain View",
            count: 100,
          },
        ],
      },
    },
    outputFields: [
      { key: "data__domain", type: "string" },
      { key: "data__locations__country", type: "string" },
      { key: "data__locations__city", type: "string" },
      { key: "data__locations__count", type: "integer" },
    ],
  },
  key: "location",
  noun: "Location",
  display: {
    label: "Location",
    description:
      "Find the location of employees based on a domain name.",
    hidden: false,
  },
};
