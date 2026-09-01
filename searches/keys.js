const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/keys`,
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
        key: "page",
        label: "Page",
        type: "integer",
        helpText: "Page number for pagination (default: 1).",
        required: false,
      },
    ],
    sample: {
      data: [
        {
          id: 1,
          api_key: "ta_xxxx",
          created_at: "2024-08-25T15:00:00Z",
        },
      ],
    },
    outputFields: [
      { key: "data__id", type: "integer" },
      { key: "data__api_key", type: "string" },
      { key: "data__created_at", type: "string" },
    ],
  },
  key: "keys",
  noun: "Key",
  display: {
    label: "List Keys",
    description: "Retrieve all your API keys.",
    hidden: false,
  },
};
