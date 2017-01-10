var _ = require("lodash")

var worker = function(foo) {
	return _.filter(foo, {active: true})
}

module.exports = worker
