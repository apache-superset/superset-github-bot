exports.ORG_WHITELIST = [
  "preset-io",
  "airbnb",
  "dropbox",
  "lyft",
  "Turing",
  "Superset-Community-Partners",
];
exports.USER_ORG_XREF = {
  "jinghua-qa": "Preset-QA",
  "rosemarie-chiu": "Preset-QA",
  "adam-stasiak": "Preset-QA",
  "prosdev0107": "Preset-Patch",
  "diegomedina248": "Preset-Patch",
  "codemaster08240328": "Preset-Patch",
  "stephenLYZ": "Preset-Patch",
};
exports.ORG_GROUPS = {
  Turing: "preset-ext",
};
// Heroku app needs to be woken up periodically to prevent it to go to sleep
// https://quickleft.com/blog/6-easy-ways-to-prevent-your-heroku-node-app-from-sleeping/
exports.HEROKU_APP_NAME = "damp-spire-74868"; // Set to falsy to stop pings
exports.HEROKU_WAKEUP_FREQUENCY = 300000; // every 5 minutes
