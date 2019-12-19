const yaml = require('js-yaml');
const fs = require('fs');

try {
  module.exports = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf8'));
  console.log(exports.conf);
} catch (e) {
  console.log(e);
}
