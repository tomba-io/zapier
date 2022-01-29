const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/email-finder`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Tomba-Key': bundle.authData.api_key,
      'X-Tomba-Secret': bundle.authData.secret_key,
    },
    params: {
      domain: bundle.inputData.domain,
      full_name: bundle.inputData.full_name,
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
        key: 'domain',
        label: 'domain',
        type: 'string',
        helpText: 'Please enter a domain name, for example "google.com".',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'full_name',
        label: 'full name',
        type: 'string',
        helpText:
          "Please enter the full name of the person you'd like to find the email address.",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        email: 'mohamed@tomba.io',
        first_name: 'Mohamed',
        last_name: 'Ben',
        full_name: 'Mohamed Ben rebia',
        country: null,
        position: null,
        twitter: null,
        linkedin: null,
        phone_number: null,
        accept_all: false,
        website_url: 'tomba.io',
        company: 'Tomba',
        score: 80,
        verification: { date: null, status: null },
        sources: [],
      },
    },
    outputFields: [
      { key: 'data__email' },
      { key: 'data__first_name' },
      { key: 'data__last_name' },
      { key: 'data__full_name' },
      { key: 'data__country' },
      { key: 'data__position' },
      { key: 'data__twitter' },
      { key: 'data__linkedin' },
      { key: 'data__phone_number' },
      { key: 'data__accept_all' },
      { key: 'data__website_url' },
      { key: 'data__company' },
      { key: 'data__score' },
      { key: 'data__verification__date' },
      { key: 'data__verification__status' },
    ],
  },
  key: 'find_email',
  noun: 'Find',
  display: {
    label: 'Find Email',
    description: 'Enter a full name and the domain name of the email address.',
    hidden: false,
    important: true,
  },
};
