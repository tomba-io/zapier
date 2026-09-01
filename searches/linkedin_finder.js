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

  // Add optional enrich_mobile parameter if provided
  if (bundle.inputData.enrich_mobile) {
    options.params.enrich_mobile = bundle.inputData.enrich_mobile;
  }
  // Add optional full parameter if provided
  if (bundle.inputData.full) {
    options.params.full = bundle.inputData.full;
  }
  // Add optional webhook_url parameter if provided
  if (bundle.inputData.webhook_url) {
    options.params.webhook_url = bundle.inputData.webhook_url;
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
    cleanInputData: false,
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
      {
        key: "enrich_mobile",
        label: "Enrich with Phone Number",
        type: "boolean",
        helpText:
          "Set to true to get the phone number associated with the email address found.",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "full",
        label: "Get Full Emails",
        type: "boolean",
        helpText:
          "Set to true to get all emails associated with the LinkedIn URL. By default, only the most likely email is returned.",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "webhook_url",
        label: "Webhook URL for Async Response",
        type: "string",
        helpText:
          "Optional: Provide a webhook URL to receive the results asynchronously. If not provided, results will be returned in the response.",
        required: false,
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
  noun: "LinkedIn",
  display: {
    label: "LinkedIn Finder",
    description:
      "Enter a LinkedIn profile URL to find the associated email address.",
    hidden: false,
  },
};
