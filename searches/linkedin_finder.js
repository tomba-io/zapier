const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/linkedin`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {
      url: bundle.inputData.url,
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
        key: "url",
        label: "LinkedIn URL",
        type: "string",
        helpText:
          "LinkedIn profile URL to generate or retrieve the most likely email address from.",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        email: "john.doe@example.com",
        first_name: "John",
        last_name: "Doe",
        full_name: "John Doe",
        domain: "example.com",
        linkedin_url: "https://linkedin.com/in/johndoe",
        company: "Example Corp",
        position: "Software Engineer",
        confidence: 95,
        sources: [
          {
            uri: "https://linkedin.com/in/johndoe",
            extracted_on: "2024-01-15T10:30:00Z",
            still_on_page: true,
          },
        ],
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
      { key: "data__score", type: "integer" },
      { key: "data__verification__date", type: "string" },
      { key: "data__verification__status", type: "string" },
    ],
  },
  key: "linkedin_finder",
  noun: "LinkedIn Finder",
  display: {
    label: "LinkedIn Finder",
    description:
      "Enter a LinkedIn profile URL to find the associated email address.",
    hidden: false,
    important: true,
  },
};
