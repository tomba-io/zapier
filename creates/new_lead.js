module.exports = {
  operation: {
    perform: {
      url: 'https://api.tomba.io/v1/leads',
      method: 'POST',
      params: {},
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Tomba-KEY': '{{bundle.authData.api_key}}',
      },
      body: {
        email: '{{bundle.inputData.email}}',
        first_name: '{{bundle.inputData.first_name}}',
        last_name: '{{bundle.inputData.last_name}}',
      },
      removeMissingValuesFrom: {},
    },
    inputFields: [
      {
        key: 'email',
        label: 'Email',
        type: 'string',
        helpText: 'The email address of the lead.',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'first_name',
        label: 'First name',
        type: 'string',
        helpText: 'The First name of lead',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'last_name',
        label: 'Last name',
        type: 'string',
        helpText: 'The Last name of lead',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: { data: { id: 117 } },
  },
  key: 'new_lead',
  noun: 'Lead',
  display: {
    label: 'Create Lead',
    description:
      'Create a new lead . If the email already exists, fails with 422 status code.',
    hidden: false,
    important: true,
  },
};
