module.exports = {
  operation: {
    perform: {
      url: "https://api.tomba.io/v1/domain-status/",
      method: "GET",
      params: { domain: "{{bundle.inputData.domain}}" },
      headers: {
        "X-Tomba-Key": "{{bundle.authData.api_key}}",
        "X-Tomba-Secret": "{{bundle.authData.secret_key}}",
      },
      body: { domain: "{{bundle.inputData.domain}}" },
      removeMissingValuesFrom: {},
    },
    inputFields: [
      {
        key: "domain",
        label: "Domain",
        type: "string",
        helpText:
          "Domain name from which you want to check the email addresses.",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: { domain: "gmail.com", webmail: true, disposable: false },
    outputFields: [
      { key: "domain", type: "string" },
      { key: "webmail", type: "boolean" },
      { key: "disposable", type: "boolean" },
    ],
  },
  key: "Domain_status",
  noun: "status",
  display: {
    label: "Domain Status",
    description: "Returns domain status if is webmail or disposable.",
    hidden: false,
  },
};
