#!/usr/bin/env sh
set -e

# sh/deploy.sh
#
# Usage via 'npm run deploy'
#
# Deploys the files to `gh-pages` branch of the same repo we are part of.
#
# Based on Vuepress's docs -> https://vuepress.vuejs.org/guide/deploy.html#github-pages with the exception of:
#   - sniffing the origin
#   - build step being done by 'package.json'
#
# Credit:
#   The approach done in the Vuepress sample is brilliant! This creates a separate git repo, within the project's
#   directory tree. The contents of that repo are force-pushed to the remote repo itself. We don't need 'gh-pages'
#   module - this does the same with four git commands.
#
ORIGIN=`git config --get remote.origin.url`
  # 'git@github.com:akauppi/Kotka-PBS.git'

cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f $ORIGIN master:gh-pages

cd -
