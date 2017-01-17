var _ = require('lodash')

var worker = function(foo) {
    
    var bar = []
    var grouped = _.groupBy(foo, function(order) {
        return order.article
    })
	
    _.each(grouped, function(orders, key) {
        numOfOrders = _.reduce(orders, function(sum, item) {
            return sum + item.quantity
        }, 0)
        bar.push({article: parseInt(key), total_orders: numOfOrders})
    })

    return _.sortBy(bar, function(object) {
        return 0 - object.article
    })
}

module.exports = worker
