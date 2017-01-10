var _ = require('lodash')

var worker = function(cities) {

	function chkTemp(n) {
		return n > 19
	}

	var cityWeather = {
		hot: [],
		warm: []
	}

	_.forEach(cities, function(val, key) {
		if (_.some(val, chkTemp) == true) {
			if (_.every(val, chkTemp) == true) cityWeather.hot.push(key)
			else cityWeather.warm.push(key)	
		}
	})

	return cityWeather
}

module.exports = worker
