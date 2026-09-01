const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/flag`,
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
          flag_type: "email",
          value: "test@example.com",
          reason: "invalid",
          comment: "Email bounced",
          created_at: "2024-08-25T15:00:00Z",
        },
      ],
    },
    outputFields: [
      { key: "data__id", type: "integer" },
      { key: "data__flag_type", type: "string" },
      { key: "data__value", type: "string" },
      { key: "data__reason", type: "string" },
      { key: "data__comment", type: "string" },
      { key: "data__created_at", type: "string" },
    ],
  },
  key: "flags",
  noun: "Flag",
  display: {
    label: "List Flags",
    description: "Retrieve all your flagged items.",
    hidden: false,
  },
};
