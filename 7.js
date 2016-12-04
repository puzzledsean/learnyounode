var http = require('http')

var URL = process.argv[2]

//console.log(URL)

http.get(URL, function(response) {
  //console.log("Got response: " + response.statusCode);
  response.on("data", function(data){
  	console.log("" + data);
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});


// //OFFICIAL SOLUTION
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })
