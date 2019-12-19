const yaml = require('js-yaml')
const fs = require('fs')

try {
  const conf = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf8'))
  module.exports = conf
  console.log('Confugration loaded:', conf);
} catch (e) {
  console.log(e)
}
