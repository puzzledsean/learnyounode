var http = require('http')
var bl = require('bl')

var URL = process.argv[2]

var counter = 0

http.get(URL, function(response){
	response.setEncoding('utf8')
	response.on('data', function(data){
		counter += data.length
	});
	response.pipe(bl(function (err, data) { 
		console.log(counter)
		console.log(data.toString()) 
	}))
})

// //OFFICIAL SOLUTION
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
