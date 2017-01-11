var _ = require('lodash')

var worker = function(foo) {

	var bar = _.chain(foo)
		.sortBy()
		.map(function (value) {
			return _.toUpper(value +=  'chained')
		})

	return bar
}

module.exports = worker
