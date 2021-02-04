/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues", async (context) => {
      const owner = 'Rrego6';
      const repo = 'TestGithubDatabaseStorage';
    const promise1 = commitJson(context, owner,repo);
      const promise2 = commitJson(context, owner,repo);
      const promise3 = commitJson(context, owner,repo);
      const promise4 = commitJson(context, owner,repo);
      const promise5 = commitJson(context, owner,repo);
      const promise6 = commitJson(context, owner,repo);
      const promise7 = commitJson(context, owner,repo);
      const promise8 = commitJson(context, owner,repo);
      let ret = await Promise.all( [promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8]);
      return ret;
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

function commitJson(context, owner, repo) {
    const mainRepo = 'main';
    const featureRepo = 'feature';
    const json = createJson();
    const time = json.time
    const content = (new Buffer(JSON.stringify(json))).toString('base64');
    return context.octokit.repos.createOrUpdateFileContents(
        {
            owner: owner,
            repo: repo,
            path: time + '.json',
            message: 'new commit',
            content: content,
            branch: Math.random() > .5  ? mainRepo : featureRepo
        }
    );
}

function createJson() {
  return {
   time: (new Date()).getTime() + Math.random() * 3023232
  }
}
