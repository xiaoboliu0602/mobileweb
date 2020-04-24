# mobileweb

## 1. 本地建仓远程关联

```sh
# 本地新建仓库进行远程关联

$ mkdir mobileweb           # 创建测试目录

$ cd mobileweb/             # 进入测试目录

$ echo "# mobileweb" >> README.md

$ git init                  # 初始化

$ git add README.md         # 添加文件

$ git commit -m "first commit" # 提交并备注信息

# 关联远程库
$ git remote add origin https://github.com/xiaoboliu0602/mobileweb.git
or
$ git remote add origin git@github.com:xiaoboliu0602/mobileweb.git

# 推送 master 分支所有内容
$ git push -u origin master

```
## 2. 远程建仓本地克隆
```sh
# 远程新建仓库本地克隆

$ git clone git@github.com:xiaoboliu0602/MobiWeb.git

$ cd MobiWeb.git
$ ls
README.md

```
## 3. 解决每次远程提交输密码问题

```sh
$ git config --global credential.helper store;

$ git push;

根据提示输入一次密码即可
```
