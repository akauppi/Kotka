# Track

## Keeping the filenames of assets near the markdown files

https://github.com/vuejs/vuepress/issues/1491



## `config.cjs` support

https://github.com/vuejs/vuepress/issues/2466

If that were to arise, we can enable `type: "module"` in the project, and rename the config to `.cjs`.


## Progress of VitePress

It will likely suit us perfectly, once in feature parity with what we use of VuePress:

- [Prev/Next](https://github.com/vuejs/vitepress/issues/43) ✅
- [Navbars](https://github.com/vuejs/vitepress/issues/36) ✅
- [Search](https://github.com/vuejs/vitepress/issues/40) (open 26-Nov-20)

### Current progress

- Vitepress 0.4.1 (3-Jul-20): Renders front page fine. No prev/next, so cannot consider transitioning, yet.

#### Tried 26-Nov-20 (0.9.0)

- Configuration docs only mention four entries (eg. how to override the port?)
- Launching with `npx vitepress dev docs` shows errors in browser (and no rendered output):

   ![](.images/vitepress-0.9.0-problems.png)

   This is in `vitepress` branch.

