const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/enrich`,
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
        helpText:
          'Please enter an email address, for example "mohamed@tomba.io".',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        email: "mohamed@tomba.io",
        first_name: "Mohamed",
        last_name: "Ben",
        full_name: "Mohamed Ben rebia",
        country: null,
        position: null,
        twitter: null,
        linkedin: null,
        phone_number: null,
        accept_all: false,
        website_url: "tomba.io",
        company: "Tomba",
        score: 80,
        verification: { date: null, status: null },
        sources: [],
      },
    },
    outputFields: [
      { key: "data__email", type: "string" },
      { key: "data__first_name", type: "string" },
      { key: "data__last_name", type: "string" },
      { key: "data__full_name", type: "string" },
      { key: "data__country", type: "string" },
      { key: "data__position", type: "string" },
      { key: "data__twitter", type: "string" },
      { key: "data__linkedin", type: "string" },
      { key: "data__phone_number", type: "string" },
      { key: "data__accept_all", type: "boolean" },
      { key: "data__website_url", type: "string" },
      { key: "data__company", type: "string" },
      { key: "data__score", type: "number" },
      { key: "data__verification__date", type: "string" },
      { key: "data__verification__status", type: "string" },
    ],
  },
  key: "enrich",
  noun: "Find",
  display: {
    label: "Email Enrichment",
    description: "Enter an email address to enrich its data.",
    hidden: false,
    important: true,
  },
};
