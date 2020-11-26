# Developer notes

## Do not try to use `file://`

The built files want to be served, not opened from `file://`. 

Also, they want to be served with the same `base` path as in the configuration. 

## Use `./` in image links

When adding images, start the path with `./`.

|path|in editor|after VuePress|
|---|---|---|
|`![](images/_.png)`|✅|❌|
|`![](./images/_.png)`|✅|✅|
