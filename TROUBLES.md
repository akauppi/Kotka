# Troubleshooting

## Hot reload does not work

Without any extra fanfare, VuePress should have hot reload of content working (you edit, save and things served by `npm run dev` simply undate in a browser).

Unfortunately, with Vuepress 1.5.0, this is not the case.

See [here](https://github.com/vuejs/vuepress/issues/221) for explanations and a cure - though it may be partial.

Ideally, we'd not even have `package-lock.json` (bring back `.npmrc`) and no need to restrict Webpack versions.

- [ ] Unknown why the issue is marked as "Closed", though no version of Vuepress offers a fix to this...
