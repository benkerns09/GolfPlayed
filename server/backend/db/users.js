var records = [
    { id: 1, username: 'ben', password: 'password', displayName: 'Ben', emails: [ { value: 'Ben@gmail.com' } ] }
  , { id: 2, username: 'james', password: 'password', displayName: 'James', emails: [ { value: 'James@gmail.com' } ] }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
