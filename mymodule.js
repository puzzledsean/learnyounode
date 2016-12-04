var fs = require('fs');
var path = require('path');
var answer = [];

module.exports = function(file, extname, callback){
		fs.readdir(file, function(error, data){
			if(error){
				return callback(error);
			}
			for(i = 0; i < data.length; i++){

					if (path.extname(data[i]) === "." + extname){
						answer.push(data[i])
					}
			}
			callback(null, answer);
		});
}

// OFFICIAL SOLUTION ------------------------
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
