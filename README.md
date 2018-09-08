JavaScript "simple-git" Shallow Clone Demo
==========================================

"Shallow Clone"是指使用`--depth=1`参数，只取最新的一个commit.

```
npm install
node run demo
```

然后就会在`local-repo`目录下看到新clone下来的`demo-project`。

检查一下是不是shallow clone:

```
$ cd local-repo/demo-project
$ git rev-list --count master
1
```
