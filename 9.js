var http = require('http')
var async = require('async')
var bl = require('bl')

var first = process.argv[2]
var sec = process.argv[3]
var third = process.argv[4]

var q = async.queue(function (task, callback) {
    http.get(first, function(response){
    	response.pipe(bl(function (err, data) {
		    if (err)
		      return console.error(err)
		    data = data.toString()
		    console.log(data.length)
		    console.log(data)
		  }))
	})
}, 3);