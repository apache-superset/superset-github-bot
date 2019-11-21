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
* auto assigns public org labels that are whitelisted in `src/config.js`
* can add a label with `🏷mylabel`
* can remove a label with `🗑🏷mylabel`

## Resources
* Bot page: https://github.com/settings/apps/superset-github-bot
* Probot templates / examples: https://probot.github.io/apps/
* Issue labeller: https://github.com/riyadhalnur/issuelabeler

## Deploy

The bot lives
[here](https://glitch.com/edit/#!/apache-superset-superset-github-bot-1?path=.env:5:0)
on Glitch and has been deployed following 
[this documentation](https://probot.github.io/docs/deployment/#glitch)

