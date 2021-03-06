#!/usr/bin/env sh

# 确保脚本遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io <根据实际情况修改>
git push -f git@github.com:shifengming/shifengming.github.io.git master

cd -