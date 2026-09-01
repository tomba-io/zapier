const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/email-finder`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {},
  };

  // Add domain or company
  if (bundle.inputData.domain) {
    options.params.domain = bundle.inputData.domain;
  }
  if (bundle.inputData.company) {
    options.params.company = bundle.inputData.company;
  }

  // Add name parameter - prefer full_name if provided, otherwise combine first_name and last_name
  if (bundle.inputData.full_name) {
    options.params.full_name = bundle.inputData.full_name;
  } else if (bundle.inputData.first_name && bundle.inputData.last_name) {
    options.params.full_name = `${bundle.inputData.first_name} ${bundle.inputData.last_name}`;
  } else if (bundle.inputData.first_name) {
    options.params.first_name = bundle.inputData.first_name;
  }

  if (bundle.inputData.last_name && !bundle.inputData.full_name) {
    options.params.last_name = bundle.inputData.last_name;
  }

  // Add optional enrich_mobile parameter if provided
  if (bundle.inputData.enrich_mobile) {
    options.params.enrich_mobile = bundle.inputData.enrich_mobile;
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
        key: "domain",
        label: "Domain",
        type: "string",
        helpText:
          'Domain name from which you want to find the email address. For example, "stripe.com". Either domain or company is required.',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "company",
        label: "Company",
        type: "string",
        helpText:
          'Company name from which you want to find the email address. For example, "stripe". Either domain or company is required.',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "full_name",
        label: "Full Name",
        type: "string",
        helpText:
          "Please enter the full name of the person you'd like to find the email address (e.g., 'John Doe').",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "first_name",
        label: "First Name",
        type: "string",
        helpText: "First name of the person (alternative to full name).",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "last_name",
        label: "Last Name",
        type: "string",
        helpText:
          "Last name of the person (use with first name as alternative to full name).",
        required: false,
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
      { key: "data__score", type: "integer" },
      { key: "data__verification__date", type: "string" },
      { key: "data__verification__status", type: "string" },
    ],
  },
  key: "find_email",
  noun: "Email",
  display: {
    label: "Find Email",
    description: "Enter a full name and the domain name of the email address.",
    hidden: false,
  },
};
