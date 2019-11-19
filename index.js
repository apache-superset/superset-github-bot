module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' })
    return context.github.issues.createComment(issueComment)
  })

  app.on('issue_comment.created', async context => {
    if (context.payload.comment.user.type != "Bot") {
      const issueComment = context.issue({ body: 'Thanks for the comment' })
      return context.github.issues.createComment(issueComment)
    }
  });

  app.on('pull_request_review_comment.created', async context => {
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
