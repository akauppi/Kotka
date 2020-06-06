# Kotka PBS

This page tells how to build and deploy the documentation.


## Requirements

- npm

```
$ npm install
```

## Getting started

```
$ npm run dev
...
```

Open [http://localhost:3100](http://localhost:3100) to see the building guide.


## Building

```
$ npm run build
```

This creates deployable files in `docs/.vuepress/dist`.

## Deploying

```
$ npm run deploy
```

You need write access to the origin of this repo.

Deployment is done manually, for now. Once we are more stable, using GitHub Actions will be a no-brainer. 

<!-- 
Once doing CI, see -> https://medium.com/front-end-weekly/ci-cd-with-github-actions-to-deploy-on-github-pages-73e225f8f131
-->

## References

- [VuePress tutorial](https://vuepressbook.com/introduction.html)

