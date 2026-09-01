const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/usage`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {},
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
        key: "include_details",
        label: "Include Details",
        type: "string",
        helpText: "Optional: filter by Include Details.",
        required: false,
      },
    ],
    sample: {
      data: {
        total: 1000,
        used: 250,
        available: 750,
      },
    },
    outputFields: [
      { key: "data__total", type: "integer" },
      { key: "data__used", type: "integer" },
      { key: "data__available", type: "integer" },
    ],
  },
  key: "usage",
  noun: "Usage",
  display: {
    label: "Usage",
    description:
      "Retrieve your current API usage statistics including total, used, and available requests.",
    hidden: false,
  },
};
