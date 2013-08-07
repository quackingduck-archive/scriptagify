#!/usr/bin/env node

var wl = console.log // write line to output stream
wl('<script language="javascript">')
process.stdin.pipe(process.stdout)
process.on('exit', function() { wl('</script>') })
