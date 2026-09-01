const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/leads`,
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
          email: "mohamed@tomba.io",
          first_name: "Mohamed",
          last_name: "Ben Rebia",
          company: "Tomba",
          website_url: "tomba.io",
          created_at: "2024-08-25T15:00:00Z",
        },
      ],
    },
    outputFields: [
      { key: "data__id", type: "integer" },
      { key: "data__email", type: "string" },
      { key: "data__first_name", type: "string" },
      { key: "data__last_name", type: "string" },
      { key: "data__company", type: "string" },
      { key: "data__website_url", type: "string" },
      { key: "data__created_at", type: "string" },
    ],
  },
  key: "leads",
  noun: "Lead",
  display: {
    label: "List Leads",
    description: "Retrieve the list of saved leads.",
    hidden: false,
  },
};
