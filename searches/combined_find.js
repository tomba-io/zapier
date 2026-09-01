const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/combined/find`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {
      email: bundle.inputData.email,
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
        key: "email",
        label: "Email",
        type: "string",
        helpText:
          'Email address to find combined person and company data for (e.g., "mohamed@tomba.io").',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        email: "mohamed@tomba.io",
        first_name: "Mohamed",
        last_name: "Ben Rebia",
        full_name: "Mohamed Ben Rebia",
        country: "DZ",
        position: "Founder",
        company: "Tomba",
        website_url: "tomba.io",
        twitter: null,
        linkedin: null,
        phone_number: null,
      },
    },
    outputFields: [
      { key: "data__email", type: "string" },
      { key: "data__first_name", type: "string" },
      { key: "data__last_name", type: "string" },
      { key: "data__full_name", type: "string" },
      { key: "data__country", type: "string" },
      { key: "data__position", type: "string" },
      { key: "data__company", type: "string" },
      { key: "data__website_url", type: "string" },
      { key: "data__twitter", type: "string" },
      { key: "data__linkedin", type: "string" },
      { key: "data__phone_number", type: "string" },
    ],
  },
  key: "combined_find",
  noun: "Combined",
  display: {
    label: "Combined Find",
    description:
      "Find combined person and company information from an email address.",
    hidden: false,
  },
};
