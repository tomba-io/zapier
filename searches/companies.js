const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/reveal/search`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    body: {},
  };

  // Add query parameter for natural language search
  if (bundle.inputData.query) {
    options.body.query = bundle.inputData.query;
  }

  // Add structured filters if provided
  if (bundle.inputData.filters) {
    options.body.filters = JSON.parse(bundle.inputData.filters);
  }

  // Add page parameter
  if (bundle.inputData.page) {
    options.body.page = bundle.inputData.page;
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
        key: "query",
        label: "Natural Language Query",
        type: "string",
        helpText:
          "Natural language query - AI assistant will select appropriate filters for you. Use this for the first request (e.g., 'Real Estate in France', 'E-commerce companies using Shopify').",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "filters",
        label: "Structured Filters (JSON)",
        type: "text",
        helpText:
          'Advanced: JSON object with structured filters for subsequent requests. Example: {"technologies":{"include":["wordpress"]},"location_country":{"include":["US"]}}',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: "page",
        label: "Page",
        type: "integer",
        helpText: "Page number for pagination (1-1000, default: 1).",
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      success: true,
      data: {
        companies: [
          {
            name: "Example Corp",
            description:
              "Leading technology company providing innovative solutions",
            country: "US",
            state: "CA",
            city: "San Francisco",
            street_address: "123 Main St",
            postal_code: "94105",
            industry: "Technology",
            company_size: "101-500",
            type: "Private",
            founded: "2010",
            website_url: "https://example.com",
            total_emails: 250,
            revenue: "$10M-$50M",
            phone_number: true,
            linkedin_url: "https://linkedin.com/company/example",
            facebook_url: "https://facebook.com/example",
            twitter_url: "https://twitter.com/example",
            total_similar: 15,
          },
        ],
        total: 1000,
        page: 1,
        limit: 10,
        pages: 100,
      },
      meta: {
        total: 1000,
        page: 1,
        limit: 10,
        pages: 100,
        filters: {
          technologies: {
            include: ["wordpress"],
            exclude: [],
          },
        },
      },
      message: "Search completed successfully",
    },
    outputFields: [
      { key: "success", type: "boolean" },
      { key: "data__companies__name", type: "string" },
      { key: "data__companies__description", type: "string" },
      { key: "data__companies__country", type: "string" },
      { key: "data__companies__state", type: "string" },
      { key: "data__companies__city", type: "string" },
      { key: "data__companies__street_address", type: "string" },
      { key: "data__companies__postal_code", type: "string" },
      { key: "data__companies__industry", type: "string" },
      { key: "data__companies__company_size", type: "string" },
      { key: "data__companies__type", type: "string" },
      { key: "data__companies__founded", type: "string" },
      { key: "data__companies__website_url", type: "string" },
      { key: "data__companies__total_emails", type: "integer" },
      { key: "data__companies__revenue", type: "string" },
      { key: "data__companies__phone_number", type: "boolean" },
      { key: "data__companies__linkedin_url", type: "string" },
      { key: "data__companies__facebook_url", type: "string" },
      { key: "data__companies__twitter_url", type: "string" },
      { key: "data__companies__total_similar", type: "integer" },
      { key: "data__total", type: "integer" },
      { key: "data__page", type: "integer" },
      { key: "data__limit", type: "integer" },
      { key: "data__pages", type: "integer" },
      { key: "meta__total", type: "integer" },
      { key: "meta__page", type: "integer" },
      { key: "meta__limit", type: "integer" },
      { key: "meta__pages", type: "integer" },
      { key: "message", type: "string" },
    ],
  },
  key: "companies",
  noun: "Company",
  display: {
    label: "Reveal Companies Search",
    description:
      "Search for companies using natural language queries or structured filters. AI-powered company discovery.",
    hidden: false,
  },
};
