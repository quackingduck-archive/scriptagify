# scriptagify

Wrap a js bundle in a script tag

Heavily inspired by [indexhtmlify](https://github.com/dominictarr/indexhtmlify)

Works great with [webpager](https://github.com/quackingduck/webpager)

```
echo 'console.log("in a bundle!")' > /tmp/b.js
browserify /tmp/b.js | scriptagify | webpager
```

## License

MIT
