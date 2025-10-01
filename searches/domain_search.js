const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/domain-search`,
    method: "GET",
    headers: {
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

    // You can do any parsing you need for results here before returning them

    return [results];
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: "domain",
        label: "Domain",
        type: "string",
        helpText: "Domain name from which you want to find the email addresses",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        organization: {
          location: {
            country: "country",
            city: "city",
            state: "state",
            street_address: "street_address",
          },
          social_links: {
            twitter_url: "twitter_url",
            facebook_url: "facebook_url",
            linkedin_url: "linkedin_url",
          },
          disposable: true,
          webmail: true,
          website_url: "website_url",
          phone_number: "phone_number",
          industries: "industries",
          postal_code: "postal_code",
          employee_count: 0,
          founded: "founded",
          company_size: "company_size",
          last_updated: "2024-08-25T15:00:00Z",
          revenue: "revenue",
          accept_all: true,
          pattern: "pattern",
          organization: "organization",
        },
        emails: [
          {
            email: "email",
            first_name: "first_name",
            last_name: "last_name",
            full_name: "full_name",
            gender: "gender",
            phone_number: true,
            type: "type",
            country: "country",
            position: "position",
            department: "department",
            seniority: "seniority",
            twitter: "twitter",
            linkedin: "linkedin",
            accept_all: true,
            pattern: "pattern",
            score: 0,
            verification: {
              date: "2024-08-25",
              status: "status",
            },
            last_updated: "2024-08-25T15:00:00Z",
            sources: [
              {
                uri: "uri",
                website_url: "website_url",
                extracted_on: "2024-08-25T15:00:00Z",
                last_seen_on: "2024-08-25T15:00:00Z",
                still_on_page: true,
              },
            ],
          },
        ],
      },
    },
    outputFields: [
      // Organization fields
      { key: "data__organization__location__country", type: "string" },
      { key: "data__organization__location__city", type: "string" },
      { key: "data__organization__location__state", type: "string" },
      { key: "data__organization__location__street_address", type: "string" },
      { key: "data__organization__social_links__twitter_url", type: "string" },
      { key: "data__organization__social_links__facebook_url", type: "string" },
      { key: "data__organization__social_links__linkedin_url", type: "string" },
      { key: "data__organization__disposable", type: "boolean" },
      { key: "data__organization__webmail", type: "boolean" },
      { key: "data__organization__website_url", type: "string" },
      { key: "data__organization__phone_number", type: "string" },
      { key: "data__organization__industries", type: "string" },
      { key: "data__organization__postal_code", type: "string" },
      { key: "data__organization__employee_count", type: "integer" },
      { key: "data__organization__founded", type: "string" },
      { key: "data__organization__company_size", type: "string" },
      { key: "data__organization__last_updated", type: "string" },
      { key: "data__organization__revenue", type: "string" },
      { key: "data__organization__accept_all", type: "boolean" },
      { key: "data__organization__pattern", type: "string" },
      { key: "data__organization__organization", type: "string" },
      // Email fields
      { key: "data__emails__email", type: "string" },
      { key: "data__emails__first_name", type: "string" },
      { key: "data__emails__last_name", type: "string" },
      { key: "data__emails__full_name", type: "string" },
      { key: "data__emails__gender", type: "string" },
      { key: "data__emails__phone_number", type: "string" },
      { key: "data__emails__type", type: "string" },
      { key: "data__emails__country", type: "string" },
      { key: "data__emails__position", type: "string" },
      { key: "data__emails__department", type: "string" },
      { key: "data__emails__seniority", type: "string" },
      { key: "data__emails__twitter", type: "string" },
      { key: "data__emails__linkedin", type: "string" },
      { key: "data__emails__accept_all", type: "boolean" },
      { key: "data__emails__pattern", type: "string" },
      { key: "data__emails__score", type: "integer" },
      { key: "data__emails__verification__date", type: "string" },
      { key: "data__emails__verification__status", type: "string" },
      { key: "data__emails__last_updated", type: "string" },
      { key: "data__emails__sources", type: "string" },
      { key: "data__emails__sources__uri", type: "string" },
      { key: "data__emails__sources__website_url", type: "string" },
      { key: "data__emails__sources__extracted_on", type: "string" },
      { key: "data__emails__sources__last_seen_on", type: "string" },
      { key: "data__emails__sources__still_on_page", type: "boolean" },
    ],
  },
  key: "domain_search",
  noun: "Domain Search",
  display: {
    label: "Domain Search",
    description: "Give domain and it returns all the email addresses.",
    hidden: false,
  },
};
