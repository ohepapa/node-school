var levelup = require('levelup')

module.exports = function (databaseDir, key, callback) {
    var db = levelup(databaseDir)
    db.get(key, function (err, value) {
        callback(err, value) 
    })
}