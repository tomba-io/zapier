const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/email-sources`,
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
          'Email address to find the sources for (e.g., "mohamed@tomba.io").',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        email: "mohamed@tomba.io",
        sources: [
          {
            uri: "https://example.com/page",
            website_url: "example.com",
            extracted_on: "2024-08-25T15:00:00Z",
            last_seen_on: "2024-08-25T15:00:00Z",
            still_on_page: true,
          },
        ],
      },
    },
    outputFields: [
      { key: "data__email", type: "string" },
      { key: "data__sources__uri", type: "string" },
      { key: "data__sources__website_url", type: "string" },
      { key: "data__sources__extracted_on", type: "string" },
      { key: "data__sources__last_seen_on", type: "string" },
      { key: "data__sources__still_on_page", type: "boolean" },
    ],
  },
  key: "email_sources",
  noun: "Source",
  display: {
    label: "Email Sources",
    description:
      "Find the web sources where an email address has been found on the internet.",
    hidden: false,
  },
};
