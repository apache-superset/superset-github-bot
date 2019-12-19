/**
 * Relays incoming payloads to downstream webhooks as configured in
 * config.yaml's relay.WEBHOOKS
 */
const confRoot = require('./config.js')
const conf = confRoot.relay
const axios = require('axios')

module.exports = app => {
  ['issues', 'issue_comment', 'label', 'pull_request', 'push'].forEach(eventType => {
    app.on(eventType, async context => {
      return Promise.all(
        conf.WEBHOOKS.map(url => {
          const options = {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'x-github-event': context.name,
              'x-github-delivery': context.id
            },
            data: context.payload,
            url
          }
          return axios(options).catch((error) => {
            console.error(error)
          })
        })
      )
    })
  })
}
