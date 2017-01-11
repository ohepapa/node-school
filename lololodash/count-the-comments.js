var _ = require('lodash')

var worker = function(foo) {
    
    var bar = []
	var grouped = _.groupBy(foo, 'username')

    _.each(grouped, function (value, key) {
        bar.push({username: key, comment_count: _.size(value)})
    })

	return _.sortBy(bar, function (item) {
        return 0 - item.comment_count
    })
}

module.exports = worker
