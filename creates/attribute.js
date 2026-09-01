const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/attributes`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    body: {
      name: bundle.inputData.name,
      type: bundle.inputData.type,
    },
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
    inputFields: [
      {
        key: "name",
        label: "Name",
        type: "string",
        helpText: "The name of the attribute.",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "type",
        label: "Type",
        type: "string",
        helpText:
          'The data type of the attribute (e.g., "string", "number", "boolean").',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        id: 1,
        name: "Industry",
        type: "string",
      },
    },
    outputFields: [
      { key: "data__id", type: "integer" },
      { key: "data__name", type: "string" },
      { key: "data__type", type: "string" },
    ],
  },
  key: "attribute",
  noun: "Attribute",
  display: {
    label: "Create Attribute",
    description: "Create a new lead attribute with a name and type.",
    hidden: false,
  },
};
