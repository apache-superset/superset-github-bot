module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const newComment = context.issue({ body: 'Thanks for opening this issue!' })
    return context.github.issues.createComment(newComment)
  })

  app.on('issue_comment.created', async context => {
    const issueCtx = context.issue();
    const issue = await context.github.issues.get(context.issue({ issue_number: context.payload.issue.number }));
    const comment = context.payload.comment.body.toLowerCase();
    if (context.payload.comment.user.type != "Bot") {
      if (comment.includes('🏷')) {
        const label = '.pinned'
        // TODO parse the label, make sure it's allowed on the repo or a static list defined here
        return context.github.issues.addLabels(context.issue({ issue_number: issueCtx.number, labels: [label] }));
      }
      const newComment = context.issue({ body: 'Thanks for the comment' })
      return context.github.issues.createComment(newComment)
    }
  });

  app.on('pull_request_review_comment.created', async context => {
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
