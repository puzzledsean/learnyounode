var fs = require('fs')

var path = process.argv[2]

var buf = fs.readFileSync(path)

var str = buf.toString()

var result = str.split("\n")

console.log(result.length -1)