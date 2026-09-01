const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/email-format`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {
      domain: bundle.inputData.domain,
    },
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
        key: "domain",
        label: "Domain",
        type: "string",
        helpText:
          'Domain name to find the email format for (e.g., "google.com").',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        email_format: "{first}.{last}",
        domain: "google.com",
        confidence: 95,
      },
    },
    outputFields: [
      { key: "data__email_format", type: "string" },
      { key: "data__domain", type: "string" },
      { key: "data__confidence", type: "integer" },
    ],
  },
  key: "email_format",
  noun: "Email Format",
  display: {
    label: "Email Format",
    description:
      "Find the email format used by a company based on its domain name.",
    hidden: false,
  },
};
