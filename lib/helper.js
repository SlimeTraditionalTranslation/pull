exports.timeout = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

exports.getPRTitle = (ref, upstream) =>
  `[自動更新] ${upstream}`

exports.getPRBody = (repoPath, prNumber) =>
  (prNumber
    ? `查看 [提交](/${repoPath}/pull/${prNumber}/commits) 和 [變化](/${repoPath}/pull/${prNumber}/files) 來獲得更多訊息.\n\n-----\nCreated by [<img src="https://prod.download/pull-18h-svg" valign="bottom"/> **pull[bot]**](https://github.com/wei/pull) | Using by [SlimeTraditionalTranslation](https://github.com/SlimeTraditionalTranslation)`
    : '查看PR來獲取更多更新資訊! \n\n-----\nCreated by [<img src="https://prod.download/pull-18h-svg" valign="bottom"/> **pull[bot]**](https://github.com/wei/pull) | Using by [SlimeTraditionalTranslation](https://github.com/SlimeTraditionalTranslation)') +
  '\n\n_Can you help keep this open source service alive? **[💖 Please sponsor : )](https://prod.download/pull-pr-sponsor)**_'
