// these are known github orgs we care about - we'll automatically tag people belonging to them
exports.ORG_WHITELIST = ['preset-io', 'airbnb', 'dropbox', 'lyft', 'Flexiana', 'Turing'];
// these are individual github handles that we tant to add explicit tags for.
exports.USER_ORG_XREF = {
  'michael-s-molina': 'Turing',
  maloun96: 'Flexiana',
  geido: 'Flexiana',
  nikolagigic: 'Flexiana',
  'jinghua-qa': 'Preset-QA',
  'rosemarie-chiu': 'Preset-QA',
  'adam-stasiak': 'Preset-QA'
};
// these GROUPS serve to aggregate people from the above two sets.
exports.ORG_GROUPS = {
  Flexiana: 'preset-ext',
  Turing: 'preset-ext'
};
// Heroku app needs to be woken up periodically to prevent it to go to sleep
// https://quickleft.com/blog/6-easy-ways-to-prevent-your-heroku-node-app-from-sleeping/
exports.HEROKU_APP_NAME = 'damp-spire-74868'; // Set to falsy to stop pings
exports.HEROKU_WAKEUP_FREQUENCY = 300000; // every 5 minutes
