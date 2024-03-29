exports.ORG_WHITELIST = ['preset-io', 'Polidea', 'polidea', 'airbnb', 'dropbox', 'lyft', 'Flexiana', 'Turing'];
exports.USER_ORG_XREF = {
  geido: 'Flexiana',
  'jinghua-qa': 'Preset-QA',
  'rosemarie-chiu': 'Preset-QA',
  'adam-stasiak': 'Preset-QA'
};
exports.ORG_GROUPS = {
  Flexiana: 'preset-ext',
  Turing: 'preset-ext',
  Polidea: 'preset-ext'
};
// Heroku app needs to be woken up periodically to prevent it to go to sleep
// https://quickleft.com/blog/6-easy-ways-to-prevent-your-heroku-node-app-from-sleeping/
exports.HEROKU_APP_NAME = 'damp-spire-74868'; // Set to falsy to stop pings
exports.HEROKU_WAKEUP_FREQUENCY = 300000; // every 5 minutes
