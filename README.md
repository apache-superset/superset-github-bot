# superset-github-bot

> A Github bot to automatically label issues and PRs, built with [Probot](https://github.com/probot/probot) that A Probot app

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Status
Currently this is just boilerplate following https://probot.github.io/docs/development/

## Resources
* Bot page: https://github.com/settings/apps/superset-github-bot
* Probot templates / examples: https://probot.github.io/apps/
* Issue labeller: https://github.com/riyadhalnur/issuelabeler

Goals:
* auto label organization based on issue/PR creator
* trigger Preset builds on build-related emojis 
* allow PMs to label things with mini language (`{label-emoji}{label}`)
* ...
