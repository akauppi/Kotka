# Todo

This may contain todo's about the documentation process, as well as the CAD details.

Also check [GitHub Issues](https://github.com/akauppi/Kotka/issues).


## build preview 

VuePress does not allow the `docs/.vuepress/dist` output to be opened as files (that's kind of a bummer).

If we want to check it before publishing (which would be Nice), we need to serve it.

Serve it as `localhost:3101/Kotka/`, since that's the `base` VuePress is given, at GitHub pages.

>Note: We can also just host at Firebase or something else, but that feels wrong, since it brings in one more dependency. GitHub pages should be enough for this!

Tried `npm serve`, looked at `npm static-serve`. Is there an npm package that allows routing?

(hmm.. firebase serve might allow just that!)

We want to:

```
$ serve-something -p 3101 docs/.vuepress/dist-as-/Kone/
```

How to do that?
 
 #help

