# Developer notes

## Do not try to use `file://`

The built files want to be served, not opened from `file://`. 

Also, they want to be served with the same `base` path as in the configuration. 
