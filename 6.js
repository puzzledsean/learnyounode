var mymodule = require('./mymodule')

var path = process.argv[2]
var extName = process.argv[3]

mymodule(path, extName, function callback(error, list){
	if(error)
		return console.error(error)
	else{
		for(var x = 0; x < list.length; x++)
			console.log(list[x])
	}
})

//OFFICIAL SOLUTION ------------------
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })