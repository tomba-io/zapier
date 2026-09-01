const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/leads_lists`,
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
          name: "My Lead List",
          leads_count: 50,
          created_at: "2024-08-25T15:00:00Z",
        },
      ],
    },
    outputFields: [
      { key: "data__id", type: "integer" },
      { key: "data__name", type: "string" },
      { key: "data__leads_count", type: "integer" },
      { key: "data__created_at", type: "string" },
    ],
  },
  key: "leads_lists",
  noun: "Leads List",
  display: {
    label: "List Leads Lists",
    description: "Retrieve all your leads lists.",
    hidden: false,
  },
};
