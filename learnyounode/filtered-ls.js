var fs = require('fs')

fs.readdir(process.argv[2], function (err, data) {
	if (err) {
      return console.error(err)
	}
	data.forEach(function (element, index, array) {
			if (element.indexOf('.'+process.argv[3]) != -1) { console.log(element) }
		})
})
