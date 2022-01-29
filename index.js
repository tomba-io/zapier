const authentication = require('./authentication');
const newLeadCreate = require('./creates/new_lead.js');
const countEmailCreate = require('./creates/count_email.js');
const domainStatusCreate = require('./creates/domain_status.js');
const findEmailSearch = require('./searches/find_email.js');
const emailVerifierSearch = require('./searches/email_verifier.js');
const domainSearchSearch = require('./searches/domain_search.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
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
  },
};
