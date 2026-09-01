const VALID_REASONS = {
  email: ["hard_bounce", "invalid_email", "wrong_person", "outdated", "other"],
  organization: ["wrong_company", "outdated", "other"],
  phone: ["wrong_phone", "outdated", "other"],
  author_url: ["broken_url", "wrong_person", "outdated", "other"],
  website: ["broken_url", "wrong_company", "outdated", "other"],
};

const perform = (z, bundle) => {
  const { flag_type, value, reason, comment } = bundle.inputData;

  // Validate flag_type
  if (!VALID_REASONS[flag_type]) {
    throw new z.errors.Error(
      `Invalid flag_type "${flag_type}". Must be one of: ${Object.keys(VALID_REASONS).join(", ")}`,
      "InvalidData",
      400
    );
  }

  // Validate reason
  if (!reason) {
    throw new z.errors.Error("Reason is required.", "InvalidData", 400);
  }
  if (!VALID_REASONS[flag_type].includes(reason)) {
    throw new z.errors.Error(
      `Invalid reason "${reason}" for flag_type "${flag_type}". Must be one of: ${VALID_REASONS[flag_type].join(", ")}`,
      "InvalidData",
      400
    );
  }

  // Validate value length
  if (!value || value.length < 2 || value.length > 255) {
    throw new z.errors.Error(
      "Value must be between 2 and 255 characters.",
      "InvalidData",
      400
    );
  }

  // Validate comment length
  if (comment && comment.length > 1000) {
    throw new z.errors.Error(
      "Comment must be at most 1000 characters.",
      "InvalidData",
      400
    );
  }

  const options = {
    url: "https://api.tomba.io/v1/flag",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Tomba-Key": bundle.authData.api_key,
      "X-Tomba-Secret": bundle.authData.secret_key,
    },
    body: { flag_type, value, reason },
  };

  if (comment) {
    options.body.comment = comment;
  }

  return z.request(options).then((response) => {
    response.throwForStatus();
    return response.json;
  });
};

module.exports = {
  operation: {
    perform: perform,
    cleanInputData: false,
    inputFields: [
      {
        key: "flag_type",
        label: "Flag Type",
        type: "string",
        helpText: "The type of data being flagged.",
        required: true,
        choices: {
          email: "Email",
          organization: "Organization",
          phone: "Phone",
          author_url: "Author URL",
          website: "Website",
        },
        altersDynamicFields: true,
      },
      {
        key: "value",
        label: "Value",
        type: "string",
        helpText:
          "The flagged item (email address, domain, phone number, or URL). 2-255 characters.",
        required: true,
      },
      {
        key: "reason",
        label: "Reason",
        type: "string",
        helpText:
          "Reason for flagging. Valid reasons depend on flag type: email(hard_bounce, invalid_email, wrong_person, outdated, other), organization(wrong_company, outdated, other), phone(wrong_phone, outdated, other), author_url(broken_url, wrong_person, outdated, other), website(broken_url, wrong_company, outdated, other).",
        required: true,
        choices: {
          hard_bounce: "Hard Bounce",
          invalid_email: "Invalid Email",
          wrong_person: "Wrong Person",
          wrong_company: "Wrong Company",
          wrong_phone: "Wrong Phone",
          broken_url: "Broken URL",
          outdated: "Outdated",
          other: "Other",
        },
      },
      {
        key: "comment",
        label: "Comment",
        type: "text",
        helpText: "Optional additional details (max 1000 characters).",
        required: false,
      },
    ],
    sample: {
      data: {
        id: 1,
        flag_type: "email",
        value: "bounce@example.com",
        reason: "hard_bounce",
        comment: "Bounced 3 times",
      },
    },
    outputFields: [
      { key: "data__id", type: "integer" },
      { key: "data__flag_type", type: "string" },
      { key: "data__value", type: "string" },
      { key: "data__reason", type: "string" },
      { key: "data__comment", type: "string" },
    ],
  },
  key: "flag",
  noun: "Flag",
  display: {
    label: "Create Flag",
    description:
      "Report incorrect data (email, organization, phone, URL, website) for credit recovery.",
    hidden: false,
  },
};
