const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/email-verifier/${bundle.inputData.email}`,
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
        helpText: "The email address you want to verify.",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        email: {
          email: "email",
          result: "result",
          status: "status",
          score: 0,
          smtp_provider: "smtp_provider",
          mx: {
            records: ["string"],
          },
          mx_check: true,
          smtp_server: true,
          smtp_check: true,
          accept_all: true,
          greylisted: true,
          block: true,
          gibberish: true,
          disposable: true,
          webmail: true,
          regex: true,
          whois: {
            registrar_name: "registrar_name",
            referral_url: "referral_url",
            created_date: "created_date",
          },
        },
        sources: [
          {
            uri: "uri",
            website_url: "website_url",
            extracted_on: "extracted_on",
            last_seen_on: "last_seen_on",
            still_on_page: true,
          },
        ],
      },
    },
    outputFields: [
      { key: "data__email__email", type: "string" },
      { key: "data__email__result", type: "string" },
      { key: "data__email__status", type: "string" },
      { key: "data__email__score", type: "integer" },
      { key: "data__email__smtp_provider", type: "string" },
      { key: "data__email__mx_check", type: "boolean" },
      { key: "data__email__smtp_server", type: "boolean" },
      { key: "data__email__smtp_check", type: "boolean" },
      { key: "data__email__accept_all", type: "boolean" },
      { key: "data__email__greylisted", type: "boolean" },
      { key: "data__email__block", type: "boolean" },
      { key: "data__email__gibberish", type: "boolean" },
      { key: "data__email__disposable", type: "boolean" },
      { key: "data__email__webmail", type: "boolean" },
      { key: "data__email__regex", type: "boolean" },
      { key: "data__email__whois__registrar_name", type: "string" },
      { key: "data__email__whois__referral_url", type: "string" },
      { key: "data__email__whois__created_date", type: "datetime" },
      { key: "data__email__sources", type: "string" },
      { key: "data__email__sources__uri", type: "string" },
      { key: "data__email__sources__website_url", type: "string" },
      { key: "data__email__sources__extracted_on", type: "string" },
      { key: "data__email__sources__last_seen_on", type: "string" },
      { key: "data__email__sources__still_on_page", type: "boolean" },
    ],
  },
  key: "email_verifier",
  noun: "Verifier",
  display: {
    label: "Email Verifier",
    description:
      "The Email Verification tool lets you check the deliverability of any email address without sending an email",
    hidden: false,
  },
};
