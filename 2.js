var arrayLength = process.argv.length - 2
var sum = 0

for(var i = 0; i < arrayLength; i++)
	sum += Number(process.argv[i+2])

console.log(sum)
