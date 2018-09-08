JavaScript "simple-git" Shallow Clone Specify Branch Demo
=========================================================

"Shallow Clone"是指使用`--depth=1`参数，只取最新的一个commit.

"Specify Branch"是说在shallow clone的时候就指定某个branch，而不使用默认的那个。

在git中，命令就是：

```
git clone <git-url> --depth=1 --branch=<some-branch>
```

但是在simple-git中，应该怎么做呢？

```
npm install
node run demo
```

然后就会在`local-repo`目录下看到新clone下来的`demo-project`。

验证一下：

```
$ cd local-repo/demo-project
```

```
$ git branch
* admin
```

```
$ git rev-list --count admin
1
```
