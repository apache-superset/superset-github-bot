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

## To develop / test
To avoid conflicting with the production bot, you'll need to create your
own Github app following the
[Probot instructions](https://probot.github.io/docs/development/).
This creates both a brand new Probot using a template
and a new Github app on your
behalf using the "Register Github App" flow. This will generate a `.env` file
that contains secrets. Moving this file over to the `github-superset-bot` will
effectively bind your new app to the existing Probot. You'll then have to
register your app against a repo of your choice to test things out.
Once you run `npm run dev`, you should start seeing events firing in your bot.

**Note:** Be sure to create a private key, as described in the probot docs, otherwise 
Probot will silently ignore your app!!


## Deploy

The bot lives on Heroku for now:
* you'll need an Heroku account and ask the mailing list to get your
  account added [here](https://dashboard.heroku.com/apps/damp-spire-74868/access) (only for committers)
* you need the right Heroku git remote `git remote add heroku https://git.heroku.com/damp-spire-74868.git`
* to deploy, `git push heroku master`
* app page is here: https://dashboard.heroku.com/apps/damp-spire-74868
* app is served here: https://damp-spire-74868.herokuapp.com/probot
* [Probot deploy docs](https://probot.github.io/docs/deployment/)
