# WiKi Markdown files -> Vuepress -> Netlify
Markdown files have to be put in _docs_ directory and commit, that's it!
Static site is generated on https://wiki-vuepress.netlify.app/

Not necessary to build static page locally, since netlify is doing it before deploying!

# Commands for local dev

* docs:dev - Launch a local dynamic server
* docs:build - Generates static files in _docs/.vuepress/dist_ directory

With docker 
* docker run -p 8080:8080/tcp -it -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm run docs:dev
* docker run -it -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm run docs:build

# Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/79f61513-c1e6-4cea-b31f-9ccbf892e5e2/deploy-status)](https://app.netlify.com/sites/wiki-vuepress/deploys)

# Add a space after diese in MD files!!!

sed -ri 's/(#)([a-zA-Z])/\1 \2/' *
