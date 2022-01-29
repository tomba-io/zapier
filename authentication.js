module.exports = {
  type: 'custom',
  test: {
    url: 'https://api.tomba.io/v1/me',
    method: 'GET',
    params: {},
    headers: {
      'X-Tomba-Key': '{{bundle.authData.api_key}}',
      'X-Tomba-Secret': '{{bundle.authData.secret_key}}',
    },
    body: {},
    removeMissingValuesFrom: {},
  },
  fields: [
    {
      computed: false,
      key: 'api_key',
      required: true,
      type: 'string',
      label: 'API KEY',
      helpText:
        'Go to the [API Details](https://app.tomba.io/api) screen from your\nWebsite Dashboard to find your API Key.',
    },
    {
      computed: false,
      key: 'secret_key',
      required: true,
      label: 'Secret Key',
      type: 'string',
      helpText:
        'Go to the [My account](https://app.tomba.io/accounts/edit) screen from your\nWebsite Dashboard to find your Secret Key.',
    },
  ],
  customConfig: {},
  connectionLabel: '"{{api_key}} @ {{secret_key}}"',
};
