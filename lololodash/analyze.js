'use strict'

var _ = require('lodash')

var worker = function(foo) {
    
    var bar = {}
    
	var avgOfIncome = _.reduce(foo, function(sumOfIncome, freelancer) {
        return sumOfIncome + freelancer.income
    }, 0) / foo.length
    
    bar.average = avgOfIncome

    var underperformAry = _
        .chain(foo)
        .filter(function(freelancer) {
            return freelancer.income <= avgOfIncome        
        })
        .sortBy('income')
    bar.underperform = underperformAry

    var overperformAry = _
        .chain(foo)
        .filter(function(freelancer) {
            return freelancer.income > avgOfIncome        
        })
        .sortBy('income')
    bar.overperform = overperformAry

    return bar
}

module.exports = worker
