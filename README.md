# Run
docker run -p 8080:8080/tcp -it -v "$PWD":/usr/src/app -w /usr/src/app node:12 npm run docs:dev

Not necessary to build static page locally, since netlify is doing it before deploying!
docs/.vuepress/dist/