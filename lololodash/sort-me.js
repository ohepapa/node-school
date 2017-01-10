var _ = require("lodash")

var worker = function(foo) {
	return _.sortBy(foo, 'quantity').reverse() 
}

module.exports = worker
