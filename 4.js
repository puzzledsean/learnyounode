var fs = require('fs')
var path = process.argv[2]
var answer = undefined

function addLines(callback) {
  fs.readFile(path, function doneReading(error, fileContents) {
    if(error)
			return console.error(error)
		else
			answer = fileContents.toString().split("\n")
    callback()
  })
}

function logLines() {
	console.log(answer.length -1)
}

addLines(logLines)


// //OFFICIAL SOLUTION------------------------------------------
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })
