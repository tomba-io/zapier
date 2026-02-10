const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/technology`,
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
        helpText:
          "Domain name to analyze for technology stack (e.g., 'shopify.com').",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      domain: "shopify.com",
      data: [
        {
          slug: "react",
          name: "React",
          icon: "https://cdn.tomba.io/technologies/react.svg",
          website: "https://reactjs.org/",
          categories: {
            id: 12,
            slug: "javascript-frameworks",
            name: "JavaScript Frameworks",
          },
        },
        {
          slug: "google-analytics",
          name: "Google Analytics",
          icon: "https://cdn.tomba.io/technologies/google-analytics.svg",
          website: "https://analytics.google.com/",
          categories: {
            id: 10,
            slug: "analytics",
            name: "Analytics",
          },
        },
        {
          slug: "shopify",
          name: "Shopify",
          icon: "https://cdn.tomba.io/technologies/shopify.svg",
          website: "https://shopify.com/",
          categories: {
            id: 6,
            slug: "ecommerce",
            name: "Ecommerce",
          },
        },
      ],
    },
    outputFields: [
      { key: "domain", type: "string" },
      { key: "data__slug", type: "string" },
      { key: "data__name", type: "string" },
      { key: "data__icon", type: "string" },
      { key: "data__website", type: "string" },
      { key: "data__categories__id", type: "integer" },
      { key: "data__categories__slug", type: "string" },
      { key: "data__categories__name", type: "string" },
    ],
  },
  key: "technology",
  noun: "Technology",
  display: {
    label: "Technology Search",
    description: "Analyze and discover the technologies used by a domain.",
    hidden: false,
  },
};
