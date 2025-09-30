const authentication = require("./authentication");
const newLeadCreate = require("./creates/new_lead.js");
const countEmailCreate = require("./creates/count_email.js");
const domainStatusCreate = require("./creates/domain_status.js");
const findEmailSearch = require("./searches/find_email.js");
const emailVerifierSearch = require("./searches/email_verifier.js");
const domainSearchSearch = require("./searches/domain_search.js");
const phoneFinderSearch = require("./searches/phone_finder.js");
const phoneValidatorSearch = require("./searches/phone_validator.js");
const linkedinFinderSearch = require("./searches/linkedin_finder.js");
const similarSearch = require("./searches/similar.js");
const authorFinderSearch = require("./searches/author_finder.js");
const enrichSearch = require("./searches/enrich.js");

module.exports = {
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,
  authentication: authentication,
  creates: {
    [newLeadCreate.key]: newLeadCreate,
    [countEmailCreate.key]: countEmailCreate,
    [domainStatusCreate.key]: domainStatusCreate,
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
  },
};
