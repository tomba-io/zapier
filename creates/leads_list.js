const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/leads_lists`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    body: {
      name: bundle.inputData.name,
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
        helpText: "The name for the new leads list.",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        id: 1,
        name: "My Lead List",
      },
    },
    outputFields: [
      { key: "data__id", type: "integer" },
      { key: "data__name", type: "string" },
    ],
  },
  key: "leads_list",
  noun: "Leads List",
  display: {
    label: "Create Leads List",
    description: "Create a new leads list.",
    hidden: false,
  },
};
