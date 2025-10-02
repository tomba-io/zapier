const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/phone-finder`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {},
  };

  // Add parameters based on what's provided
  if (bundle.inputData.email) {
    options.params.email = bundle.inputData.email;
  }
  if (bundle.inputData.domain) {
    options.params.domain = bundle.inputData.domain;
  }
  if (bundle.inputData.linkedin) {
    options.params.linkedin = bundle.inputData.linkedin;
  }

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return [results];
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: "email",
        label: "Email",
        type: "string",
        helpText: "Email address to search for associated phone numbers.",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "domain",
        label: "Domain",
        type: "string",
        helpText:
          'Domain name to search for associated phone numbers (e.g., "google.com").',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "linkedin",
        label: "LinkedIn URL",
        type: "string",
        helpText:
          "LinkedIn profile URL to search for associated phone numbers.",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        email: "email",
        domain: "domain",
        valid: true,
        local_format: "local_format",
        intl_format: "intl_format",
        e164_format: "e164_format",
        rfc3966_format: "rfc3966_format",
        country_code: "country_code",
        line_type: "line_type",
        carrier: "carrier",
        timezones: "timezones",
      },
    },
    outputFields: [
      { key: "data__email", type: "string" },
      { key: "data__domain", type: "string" },
      { key: "data__valid", type: "boolean" },
      { key: "data__local_format", type: "string" },
      { key: "data__intl_format", type: "string" },
      { key: "data__e164_format", type: "string" },
      { key: "data__rfc3966_format", type: "string" },
      { key: "data__country_code", type: "string" },
      { key: "data__line_type", type: "string" },
      { key: "data__carrier", type: "string" },
      { key: "data__timezones", type: "string" },
    ],
  },
  key: "phone_finder",
  noun: "Phone",
  display: {
    label: "Phone Finder",
    description:
      "Phone Finder helps you search for phone numbers based on an email, domain, or LinkedIn URL. Provide one of these parameters to retrieve associated phone data.",
    hidden: false,
  },
};
