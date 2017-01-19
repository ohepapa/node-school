'use strict'

var _ = require('lodash')

var worker = function(foo) {

    return _.template('Hello <%= name %> (logins: <%= num %>)')({name: foo.name, num: foo.login.length})
}

module.exports = worker
