const authentication = require("./authentication");
const newLeadCreate = require("./creates/new_lead.js");
const flagCreate = require("./creates/flag.js");
const leadsListCreate = require("./creates/leads_list.js");
const attributeCreate = require("./creates/attribute.js");
const keyCreate = require("./creates/key.js");
const countEmailCreate = require("./searches/count_email.js");
const domainStatusCreate = require("./searches/domain_status.js");
const findEmailSearch = require("./searches/find_email.js");
const emailVerifierSearch = require("./searches/email_verifier.js");
const domainSearchSearch = require("./searches/domain_search.js");
const phoneFinderSearch = require("./searches/phone_finder.js");
const phoneValidatorSearch = require("./searches/phone_validator.js");
const linkedinFinderSearch = require("./searches/linkedin_finder.js");
const similarSearch = require("./searches/similar.js");
const authorFinderSearch = require("./searches/author_finder.js");
const enrichSearch = require("./searches/enrich.js");
const companiesSearch = require("./searches/companies.js");
const technologySearch = require("./searches/technology.js");
const emailFormatSearch = require("./searches/email_format.js");
const emailSourcesSearch = require("./searches/email_sources.js");
const domainSuggestionsSearch = require("./searches/domain_suggestions.js");
const locationSearch = require("./searches/location.js");
const personFindSearch = require("./searches/person_find.js");
const companyFindSearch = require("./searches/company_find.js");
const combinedFindSearch = require("./searches/combined_find.js");
const accountSearch = require("./searches/account.js");
const usageSearch = require("./searches/usage.js");
const logsSearch = require("./searches/logs.js");
const leadsSearch = require("./searches/leads.js");
const leadsListsSearch = require("./searches/leads_lists.js");
const attributesSearch = require("./searches/attributes.js");
const keysSearch = require("./searches/keys.js");
const flagsSearch = require("./searches/flags.js");

module.exports = {
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,
  authentication: authentication,
  creates: {
    [newLeadCreate.key]: newLeadCreate,
    [countEmailCreate.key]: countEmailCreate,
    [domainStatusCreate.key]: domainStatusCreate,
    [flagCreate.key]: flagCreate,
    [leadsListCreate.key]: leadsListCreate,
    [attributeCreate.key]: attributeCreate,
    [keyCreate.key]: keyCreate,
  },
  searches: {
    [findEmailSearch.key]: findEmailSearch,
    [emailVerifierSearch.key]: emailVerifierSearch,
    [domainSearchSearch.key]: domainSearchSearch,
    [phoneFinderSearch.key]: phoneFinderSearch,
    [phoneValidatorSearch.key]: phoneValidatorSearch,
    [linkedinFinderSearch.key]: linkedinFinderSearch,
    [similarSearch.key]: similarSearch,
    [authorFinderSearch.key]: authorFinderSearch,
    [enrichSearch.key]: enrichSearch,
    [companiesSearch.key]: companiesSearch,
    [technologySearch.key]: technologySearch,
    [emailFormatSearch.key]: emailFormatSearch,
    [emailSourcesSearch.key]: emailSourcesSearch,
    [domainSuggestionsSearch.key]: domainSuggestionsSearch,
    [locationSearch.key]: locationSearch,
    [personFindSearch.key]: personFindSearch,
    [companyFindSearch.key]: companyFindSearch,
    [combinedFindSearch.key]: combinedFindSearch,
    [accountSearch.key]: accountSearch,
    [usageSearch.key]: usageSearch,
    [logsSearch.key]: logsSearch,
    [leadsSearch.key]: leadsSearch,
    [leadsListsSearch.key]: leadsListsSearch,
    [attributesSearch.key]: attributesSearch,
    [keysSearch.key]: keysSearch,
    [flagsSearch.key]: flagsSearch,
  },
};
