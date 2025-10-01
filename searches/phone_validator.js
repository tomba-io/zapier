const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/phone-validator`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {
      phone: bundle.inputData.phone,
    },
  };

  // Add optional country_code parameter if provided
  if (bundle.inputData.country_code) {
    options.params.country_code = bundle.inputData.country_code;
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
        key: "phone",
        label: "Phone Number",
        type: "string",
        helpText: "The phone number you want to validate.",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "country_code",
        label: "Country Code",
        type: "string",
        helpText: 'Country code of the phone number. For example, "US".',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        phone: "phone",
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
      { key: "data__phone", type: "string" },
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
  key: "phone_validator",
  noun: "Phone Validator",
  display: {
    label: "Phone Validator",
    description:
      "Phone validator allows you to validate a phone number and retrieve its associated information.",
    hidden: false,
  },
};
