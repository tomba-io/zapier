const perform = (z, bundle) => {
  const options = {
    url: `https://api.tomba.io/v1/email-verifier/${bundle.inputData.email}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Tomba-Key': bundle.authData.api_key,
      'X-Tomba-Secret': bundle.authData.secret_key,
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
        key: 'email',
        label: 'Email',
        type: 'string',
        helpText: 'The email address you want to verify.',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      data: {
        email: {
          mx_records: true,
          smtp_server: null,
          smtp_check: true,
          accept_all: null,
          block: null,
          email: 'b.abedrahim@tomba.io',
          gibberish: false,
          disposable: false,
          webmail: false,
          regex: true,
        },
        sources: [
          {
            uri:
              'https://github.com/tomba-io/generic-emails/blob/084fc1a63d3cdaf9a34f255bedc2baea49a8e8b9/src/lib/validation/hash.ts',
            extracted_on: '2021-02-08T20:09:54+01:00',
            last_seen_on: '2021-02-08T22:43:40+01:00',
            still_on_page: true,
            website_url: 'github.com',
          },
          {
            uri:
              'https://github.com/tomba-io/generic-emails/blame/084fc1a63d3cdaf9a34f255bedc2baea49a8e8b9/src/lib/validation/hash.ts',
            extracted_on: '2021-02-08T20:09:59+01:00',
            last_seen_on: '2021-02-08T22:43:40+01:00',
            still_on_page: true,
            website_url: 'github.com',
          },
        ],
      },
    },
    outputFields: [],
  },
  key: 'email_verifier',
  noun: 'Verifier',
  display: {
    label: 'Email Verifier',
    description:
      'The Email Verification tool lets you check the deliverability of any email address without sending an email',
    hidden: false,
    important: true,
  },
};
