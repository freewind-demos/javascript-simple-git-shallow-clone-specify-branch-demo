const workingDirPath = './local-repo'
const simpleGit = require('simple-git')(workingDirPath)

simpleGit.clone('https://github.com/freewind-demos/git-shallow-clone-checkout-remote-branch-demo.git', 'demo-project', '--depth=1')

console.log('shallow cloned to: local-repo/demo-project')