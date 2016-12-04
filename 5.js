var fs = require('fs')
var path = process.argv[2]
var filterType = "." + process.argv[3]

fs.readdir(path, function pulledList(error, list){
	for(var i = 0; i < list.length; i++){
		if(list[i].indexOf(filterType) != -1)
			console.log(list[i])
	}
})

