const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/companies/find`,
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
          'Domain name to find the company for (e.g., "google.com").',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        organization: "Google",
        website_url: "google.com",
        industries: "Technology",
        employee_count: 150000,
        founded: "1998",
        country: "US",
        city: "Mountain View",
        state: "CA",
        phone_number: "+1-650-253-0000",
        linkedin_url: "https://linkedin.com/company/google",
        twitter_url: "https://twitter.com/Google",
        facebook_url: "https://facebook.com/Google",
        revenue: "$10B+",
      },
    },
    outputFields: [
      { key: "data__organization", type: "string" },
      { key: "data__website_url", type: "string" },
      { key: "data__industries", type: "string" },
      { key: "data__employee_count", type: "integer" },
      { key: "data__founded", type: "string" },
      { key: "data__country", type: "string" },
      { key: "data__city", type: "string" },
      { key: "data__state", type: "string" },
      { key: "data__phone_number", type: "string" },
      { key: "data__linkedin_url", type: "string" },
      { key: "data__twitter_url", type: "string" },
      { key: "data__facebook_url", type: "string" },
      { key: "data__revenue", type: "string" },
    ],
  },
  key: "company_find",
  noun: "Company",
  display: {
    label: "Company Find",
    description:
      "Find company information by its domain name.",
    hidden: false,
  },
};
