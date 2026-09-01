const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/me`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    params: {},
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
        key: "include_pricing",
        label: "Include Pricing",
        type: "boolean",
        helpText: "Include pricing details in the response.",
        required: false,
      },
    ],
    sample: {
      data: {
        email: "mohamed@tomba.io",
        first_name: "Mohamed",
        last_name: "Ben Rebia",
        role: "admin",
        plan: "enterprise",
      },
    },
    outputFields: [
      { key: "data__email", type: "string" },
      { key: "data__first_name", type: "string" },
      { key: "data__last_name", type: "string" },
      { key: "data__role", type: "string" },
      { key: "data__plan", type: "string" },
    ],
  },
  key: "account",
  noun: "Account",
  display: {
    label: "Account Information",
    description:
      "Retrieve your account information including name, email, and plan details.",
    hidden: false,
  },
};
