# Merge-es6-vendor Error


### Steps to reproduce

```
bower install --save ember-inflector
ember s
```

Will produce the following error:

```
File: dummy/routes/application.js
ENOENT, no such file or directory '/Users/chietala/workspace/shift/merge-es6-vendor/tmp/tree_merger-tmp_dest_dir-szCVHgL8.tmp/vendor/ember-inflector/main.js'
```


### ENV

```
version: 0.1.4
valid watchman found, version: [3.0.0]
node: 0.10.33
npm: 2.1.10
```


