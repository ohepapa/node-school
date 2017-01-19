sum = 0

function sumArgv(element, index, array) {
	if (index > 1) sum += parseInt(element)
}

process.argv.forEach(sumArgv)

console.log(sum)