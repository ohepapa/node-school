var _ = require("lodash")

var foo = [{ article: 41,   quantity: 24 },
     { article: 2323, quantity: 2  },
     { article: 655,  quantity: 23 }]

	console.log(_.sortBy(foo, function(n) { return -n.quantity }))

