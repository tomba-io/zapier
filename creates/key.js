const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/keys`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    body: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    cleanInputData: false,
    inputFields: [],
    sample: {
      data: {
        id: 1,
        api_key: "ta_xxxx",
      },
    },
    outputFields: [
      { key: "data__id", type: "integer" },
      { key: "data__api_key", type: "string" },
    ],
  },
  key: "key",
  noun: "Key",
  display: {
    label: "Create Key",
    description: "Create a new API key.",
    hidden: false,
  },
};
