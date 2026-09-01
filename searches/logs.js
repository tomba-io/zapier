const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/logs`,
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
          type: "domain-search",
          uri: "/v1/domain-search?domain=tomba.io",
          cost: 1,
          ip_address: "127.0.0.1",
          created_at: "2024-08-25T15:00:00Z",
        },
      ],
    },
    outputFields: [
      { key: "data__id", type: "integer" },
      { key: "data__type", type: "string" },
      { key: "data__uri", type: "string" },
      { key: "data__cost", type: "integer" },
      { key: "data__ip_address", type: "string" },
      { key: "data__created_at", type: "string" },
    ],
  },
  key: "logs",
  noun: "Log",
  display: {
    label: "Logs",
    description: "Retrieve your API request logs.",
    hidden: false,
  },
};
