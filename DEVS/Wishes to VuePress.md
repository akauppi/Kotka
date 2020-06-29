# Wishes to VuePress

## Error messages

- No proper error messages if something's wrong with the input (just blank page in browser; no console errors)

Note: This may vary by the errors. The one that caused problems was a `<p>` at the end of the original markdowns. Quite annoying not being told, what's wrong.

**For example:**

```
>![](./images/520-teeth-side.png)
```

Such a link only works when the path is relative (`./images/...`). If it's `images/...`, the picture may still show in editors, but not in VuePress output. 

This is tedious, and leads to missing pictures in the publication. VuePress should list such links as bad, on the build console (and optionally fail the build).


## `.vuepress` at project root

Don't understand why not. 

VuePress configuration is not part of my docs. Why must it be at `docs/.vuepress/config.js` and not `.vuepress/config.js`???

See [Store .vuepress folder in another directory](https://stackoverflow.com/questions/51326711/store-vuepress-folder-in-another-directory/62237733#62237733) (StackOverflow)


## Support for `.cjs` and/or `type: module`

One cannot currently set a project's default to ES6 module loading, by adding `"type": "module"` into `package.json`.

This is a preference I'm having on all projects, if possible. Then I rename CommonJS-era files `.cjs` where needed.

VuePress (1.5.2) does not like this. It seems to be require:ing `config.js` by name, including the extension (otherwise Node would pass it `config.cjs`, right?)

Would it be possible to support the `type: module`, `.mjs`, `.cjs` conventions?  

Ideally, I would prefer providing configuration to VuePress as ES6 module, in a `.js` file.

- [x] created https://github.com/vuejs/vuepress/issues/2466


## Warnings if there are dead links

If a file has a link to `nowhere.md` that does not exist, it would be welcome to see warnings at the output of `dev` command, and in a build.  

With the build, it would be nice to be able to configure such cases to be either warnings or errors (no deployment if there are broken links).

Current behaviour (VuePress 1.5.2): missing links don't seem to be checked.


