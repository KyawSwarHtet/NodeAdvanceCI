"use strict";

var mongoose = require("mongoose");

var redis = require("redis");

var util = require("util");

var redisUrl = "redis://127.0.0.1:6379";
var client = redis.createClient(redisUrl);
client.hget = util.promisify(client.hget);
var exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || "");
  return this;
};

mongoose.Query.prototype.exec = function _callee() {
  var _this = this;

  var key,
      cachedValue,
      doc,
      result,
      _args = arguments;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (this.useCache) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", exec.apply(this, _args));

        case 2:
          key = JSON.stringify(Object.assign({}, this.getQuery(), {
            collection: this.mongooseCollection.name
          })); // See if we have a value for 'key' in redis

          _context.next = 5;
          return regeneratorRuntime.awrap(client.hget(this.hashKey, key));

        case 5:
          cachedValue = _context.sent;

          if (!cachedValue) {
            _context.next = 10;
            break;
          }

          console.log("fetching cached value");
          doc = JSON.parse(cachedValue);
          return _context.abrupt("return", Array.isArray(doc) ? doc.map(function (d) {
            return new _this.model(d);
          }) : new this.model(doc));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(exec.apply(this, _args));

        case 12:
          result = _context.sent;
          client.hset(this.hashKey, key, JSON.stringify(result));
          return _context.abrupt("return", result);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
};

module.exports = {
  clearHash: function clearHash(hashKey) {
    client.del(JSON.stringify(hashKey));
  }
};
//# sourceMappingURL=cache.dev.js.map
