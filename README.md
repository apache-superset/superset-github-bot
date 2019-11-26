# superset-github-bot

> A Github bot to automatically label issues and PRs, built with [Probot](https://github.com/probot/probot) that A Probot app
<img width="789" alt="Screen Shot 2019-11-21 at 8 16 26 AM" src="https://user-images.githubusercontent.com/487433/69356176-e0a70c00-0c37-11ea-8505-4860c3c3e4b3.png">


## Setup

```sh
# Install dependencies
npm install

# Start developing 
npm run dev
```

## Current actions
* auto assigns organization as a label
  * orgs have to be whitelisted in `src/config.js`
  * affiliation to org has to be public, [here's how to set this up](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/publicizing-or-hiding-organization-membership)
* can add a label with a comment that contains `🏷mylabel`
* can remove a label with a comment that contains `🗑🏷mylabel`

## Resources
* Bot page: https://github.com/settings/apps/superset-github-bot
* Probot templates / examples: https://probot.github.io/apps/
* Issue labeller: https://github.com/riyadhalnur/issuelabeler

## Deploy

The bot lives on Heroku for now:
* app page: https://dashboard.heroku.com/apps/damp-spire-74868
* https://damp-spire-74868.herokuapp.com/probot
* [deploy info](https://probot.github.io/docs/deployment/)
