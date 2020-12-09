const conf = require('./config.js');

async function assignOrgLabel(context, conf) {
  const G = context.github;
  const issueOrPR = context.payload.issue || context.payload.pull_request;
  const username = issueOrPR.user.login;
  const orgs = await G.orgs.listForUser({ username });
  const orgNames = orgs.data.map(v => v.login);
  const issueCtx = context.issue();
  // get list of matching github orgs
  let matchingOrgs = orgNames.filter(org => conf.ORG_WHITELIST.includes(org));
  // append user-based orgs from list
  if(conf.USER_ORG_XREF[username]){
    matchingOrgs.push(conf.USER_ORG_XREF[username])
  }
  // look up org groups, add 'em in!
  const orgGroups = []
  matchingOrgs.forEach(org => {
    if(conf.ORG_GROUPS[org]){
      orgGroups.push(conf.ORG_GROUPS[org])
    }
  });
  matchingOrgs.concat(orgGroups);
  // dedupe, just in case
  matchingOrgs = new Set(matchingOrgs);
  matchingOrgs.forEach(org => {
    return G.issues.addLabels(
      context.issue({ issue_number: issueCtx.number, labels: [org] }));
  });
}
async function emojiLabel(context) {
  const issueCtx = context.issue();
  const comment = context.payload.comment.body.toLowerCase();
  console.log(`Looking for labels in comment: "${comment}"`);
  if (context.payload.comment.user.type != "Bot") {
    //const match = comment.match(/\u{1F3F7}\s*(\S+)\s*(\n|$)/u);
    const match = comment.match(/🏷\s*(.+)\s*(\n|$)/);
    if (match) {
      const label = match[1].replace(String.fromCharCode(65039), "").trim();
      console.log(`Found label: "${label}"`);
      const isValidTag = label.match(/^([a-z0-9-\.:]+)$/i);
      if (isValidTag) {
        console.log(`Label is valid!`);
        if (comment.includes('🗑')) {
          console.log(`Removing label`);
          return context.github.issues.removeLabel(
            context.issue({ issue_number: issueCtx.number, name: label }));
        }
        else {
          console.log(`Adding label`);
          return context.github.issues.addLabels(
            context.issue({ issue_number: issueCtx.number, labels: [label] }));
        }
      } else {
        console.log("Label is not valid");
      }
    } else {
      console.log("Didn't find a proper label emoji");
    }
  }
}

async function createIssueComment(context, msg) {
  const newComment = context.issue({ body: msg });
  return context.github.issues.createComment(newComment);
}

module.exports = app => {

  app.on('issues.opened', async context => {
    assignOrgLabel(context, conf);
  })

  app.on('pull_request.opened', async context => {
    assignOrgLabel(context, conf);
  })

  app.on('issue_comment.created', async context => {
    emojiLabel(context);
  });

  app.on('pull_request_review_comment.created', async context => {
  });

}

if (conf.HEROKU_APP_NAME) {
  const http = require("http");
  setInterval(() => {
    console.log('WAKE UP HEROKU!');
    try {
      http.get(`http://${conf.HEROKU_APP_NAME}.herokuapp.com`);
    } catch(e) {
      console.error('HTTP get failed...');
    }
  }, conf.HEROKU_WAKEUP_FREQUENCY);
}
