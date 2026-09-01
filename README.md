# [<img src="https://tomba.io/logo.svg" alt="Tomba" width="25"/>](https://tomba.io/) Tomba Zapier Integration

> The #1 Rated Email Intelligence Platform — Connect Tomba with 7,000+ apps via Zapier.

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

## About Tomba

[Tomba.io](https://tomba.io) is the #1 rated email intelligence platform, trusted by **150,000+ sales teams** worldwide.

- **Best Email Finder** — 98% accuracy, ranked #1 in independent benchmarks
- **Best Email Verification** — Real-time SMTP verification with catch-all detection
- **Best Phone Finder** — Direct dial numbers linked to professional emails
- **Best Domain Search** — 450M+ verified contacts across all industries
- **81% Coverage** — The highest in the industry, proven in 5,000-lead independent tests

### Why Tomba?

| Feature             | Tomba              | Others        |
| ------------------- | ------------------ | ------------- |
| Email Coverage      | **81%**            | 30-60%        |
| Verification        | **Real-time SMTP** | Pattern-based |
| Phone Numbers       | **Direct dials**   | Limited       |
| Catch-all Detection | **AI-powered**     | Basic         |
| API Rate Limits     | **Generous**       | Restrictive   |

[Get your free API key](https://app.tomba.io/auth/register) — No credit card required.

## Installation

```bash
npm install
zapier login
zapier push
```

## Authentication

1. Sign up for a free account at [Tomba.io](https://app.tomba.io/auth/register)
2. Get your **API Key** and **Secret Key** from the [API dashboard](https://app.tomba.io/api)
3. When connecting Tomba in Zapier, enter both keys when prompted

## Operations

### Searches (28)

| Operation               | Key                  | Description                                          |
| ----------------------- | -------------------- | ---------------------------------------------------- |
| Email Finder            | `find_email`         | Find an email address from a name and domain         |
| Email Verifier          | `email_verifier`     | Verify the deliverability of an email address        |
| Domain Search           | `domain_search`      | Find all email addresses for a given domain          |
| Email Enrichment        | `enrich`             | Look up person and company data based on an email    |
| Author Finder           | `author_finder`      | Find author email from a blog post URL               |
| LinkedIn Finder         | `linkedin_finder`    | Find email from a LinkedIn profile URL               |
| Phone Finder            | `phone_finder`       | Find phone numbers by email, domain, or LinkedIn URL |
| Phone Validator         | `phone_validator`    | Validate a phone number and get associated info      |
| Similar Domains         | `similar`            | Find domains similar to a given domain               |
| Technology              | `technology`         | Get technologies used by a domain                    |
| Reveal Companies Search | `companies`          | Search companies using natural language or filters   |
| Email Format            | `email_format`       | Get email format patterns for a domain               |
| Email Sources           | `email_sources`      | Find email address sources on the web                |
| Domain Suggestions      | `domain_suggestions` | Autocomplete company names and domains               |
| Location                | `location`           | Get employee locations for a domain                  |
| Person Find             | `person_find`        | Find person data by email                            |
| Company Find            | `company_find`       | Find company data by domain                          |
| Combined Find           | `combined_find`      | Combined person and company enrichment by email      |
| Account                 | `account`            | Get account information                              |
| Usage                   | `usage`              | Get account usage stats                              |
| Logs                    | `logs`               | Get account API logs                                 |
| Leads                   | `leads`              | List and search leads                                |
| Lead Lists              | `leads_lists`        | List lead lists                                      |
| Attributes              | `attributes`         | List lead attributes                                 |
| Keys                    | `keys`               | List API keys                                        |
| Flags                   | `flags`              | List submitted flags                                 |
| Email Count             | `count_email`        | Get total email addresses for a domain               |
| Domain Status           | `domain_status`      | Check if a domain is webmail or disposable           |

### Creates (5)

| Operation        | Key          | Description                               |
| ---------------- | ------------ | ----------------------------------------- |
| Create Lead      | `new_lead`   | Create a new lead                         |
| Create Flag      | `flag`       | Report incorrect data for credit recovery |
| Create Lead List | `leads_list` | Create a new lead list                    |
| Create Attribute | `attribute`  | Create a new lead attribute               |
| Create Key       | `key`        | Create a new API key                      |

### Flag Types & Reasons

When reporting incorrect data via the **Create Flag** operation, use the following types and reasons:

| Type           | Description                                        |
| -------------- | -------------------------------------------------- |
| `email`        | Flag an incorrect email address                    |
| `phone`        | Flag an incorrect phone number                     |
| `enrichment`   | Flag incorrect enrichment data                     |

| Reason         | Description                                        |
| -------------- | -------------------------------------------------- |
| `hard_bounce`  | Email bounced permanently                          |
| `wrong_person` | Email belongs to a different person                |
| `catch_all`    | Address is catch-all, not personal                 |
| `other`        | Other reason                                       |

## Testing

```bash
export API_KEY=ta_xxxx
export SECRET_KEY=ts_xxxx
yarn test
```

### Deploying

```bash
yarn push
```

### Validating

```bash
yarn validate
```

## Documentation

- [Tomba API Documentation](https://docs.tomba.io)
- [Zapier Platform CLI](https://platform.zapier.com/cli_tutorials/getting-started)

## About Tomba

Founded to solve the problem of unreliable email data, [Tomba.io](https://tomba.io) is the leading B2B email intelligence platform.

### Products

- **[Email Finder](https://tomba.io/email-finder)** — Find any professional email address
- **[Email Verifier](https://tomba.io/email-verifier)** — Verify emails in real-time
- **[Domain Search](https://tomba.io/domain-search)** — Find all emails for a company
- **[Phone Finder](https://tomba.io/phone-finder)** — Find direct phone numbers
- **[Bulk Enrichment](https://tomba.io/bulks)** — Enrich contacts at scale
- **[AI Company Search](https://tomba.io/reveal)** — Find companies with AI-powered search
- **[CLI](https://tomba.io/cli)** — Command-line interface
- **[MCP Server](https://tomba.io/mcp)** — Connect AI tools to Tomba
- **[REST API](https://tomba.io/api)** — Full programmatic access

### Browser Extensions & Add-ons

- **[Chrome Extension](https://chromewebstore.google.com/detail/tomba-email-finder-email/icmjegjggphchjckknoooajmklibccjb)** — Find emails while browsing
- **[Google Sheets Add-on](https://tomba.io/sheets)** — Enrich leads in spreadsheets

### Integrations

50+ CRM and sales tool integrations:
[Salesforce](https://tomba.io/integrations) · [HubSpot](https://tomba.io/integrations) · [Zapier](https://tomba.io/integrations) · [Pipedrive](https://tomba.io/integrations) · [and more...](https://tomba.io/integrations)

### Other Tomba SDKs

| Language | Package                                                     |
| -------- | ----------------------------------------------------------- |
| Node.js  | [tomba](https://www.npmjs.com/package/tomba)                |
| Python   | [tomba-io](https://pypi.org/project/tomba-io/)              |
| PHP      | [tomba-io/php](https://packagist.org/packages/tomba-io/php) |
| Ruby     | [tomba](https://rubygems.org/gems/tomba)                    |
| Go       | [tomba-io/go](https://pkg.go.dev/github.com/tomba-io/go)    |
| Rust     | [tomba](https://crates.io/crates/tomba)                     |
| Dart     | [tomba](https://pub.dev/packages/tomba)                     |
| Deno     | [@tomba/sdk](https://jsr.io/@tomba/sdk)                     |
| Elixir   | [tomba](https://hex.pm/packages/tomba)                      |
| C#       | [Tomba](https://www.nuget.org/packages/Tomba)               |
| Perl     | [Tomba::Client](https://metacpan.org/pod/Tomba::Client)     |
| Lua      | [tomba](https://luarocks.org/modules/tomba/tomba)           |
| R        | [tomba](https://github.com/tomba-io/r)                      |

### Resources

- [Blog](https://tomba.io/blog) · [Help Center](https://help.tomba.io) · [API Docs](https://docs.tomba.io) · [Pricing](https://tomba.io/pricing) · [Status](https://status.tomba.io)

---

**[Try Tomba Free](https://app.tomba.io/auth/register)** — Find your first email in seconds. No credit card required.

## License

Apache-2.0
