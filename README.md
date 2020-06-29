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

This creates deployable files in `dist/`.

### Quality control

```
$ npm run build-and-serve     # or just 'npm run _serve'
```

Open [http://localhost:3101/Kotka](http://localhost:3101/Kotka) to test the build results.

>Note: Doing that is a bit of a hack, involving `_fakeRoot` and a symbolic link in it. If you know of an npm static server with route handling (so we could make `Kotka/` point to `dist`), or can code such in Node, that would be #welcome!


## Deploying

```
$ npm run deploy
```

Currently deploying using GitHub Pages, and the `gh-pages` branch of this repo. This need not remain so.

Pros:

- one platform, GitHub

Cons:

- VuePress seems to be pushing the same images over and over
  - slow pushes
  - takes space(?) at the repo

Deployment is done manually, for now. 

>Once we have our own domain, should look back at this. Firebase hosting may be a good candidate.

Check the output at [https://akauppi.github.io/Kotka](https://akauppi.github.io/Kotka).

>Note: Better URL once we get the association running. 👟

<!-- 
Once doing CI, see -> https://medium.com/front-end-weekly/ci-cd-with-github-actions-to-deploy-on-github-pages-73e225f8f131
-->

## References

- [VuePress tutorial](https://vuepressbook.com/introduction.html)

