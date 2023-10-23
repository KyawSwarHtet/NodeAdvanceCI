"use strict";

var _require = require("../services/cache"),
    clearHash = _require.clearHash;

module.exports = function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(next());

        case 2:
          clearHash(req.user.id);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};
//# sourceMappingURL=cleanCache.dev.js.map
