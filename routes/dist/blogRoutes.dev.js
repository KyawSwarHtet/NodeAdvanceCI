"use strict";

var mongoose = require("mongoose");

var requireLogin = require("../middlewares/requireLogin");

var cleanCache = require("../middlewares/cleanCache");

var Blog = mongoose.model("Blog");

module.exports = function (app) {
  app.get("/api/blogs/:id", requireLogin, function _callee(req, res) {
    var blog;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Blog.findOne({
              _user: req.user.id,
              _id: req.params.id
            }));

          case 2:
            blog = _context.sent;
            res.send(blog);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  app.get("/api/blogs", requireLogin, function _callee2(req, res) {
    var blogs;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Blog.find({
              _user: req.user.id
            }).cache({
              key: req.user.id
            }));

          case 2:
            blogs = _context2.sent;
            console.log("Serving from MongoDB");
            res.send(blogs);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  app.post("/api/blogs", requireLogin, cleanCache, function _callee3(req, res) {
    var _req$body, title, content, blog;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, content = _req$body.content;
            blog = new Blog({
              title: title,
              content: content,
              _user: req.user.id
            });
            _context3.prev = 2;
            _context3.next = 5;
            return regeneratorRuntime.awrap(blog.save());

          case 5:
            res.send(blog);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](2);
            res.send(400, _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[2, 8]]);
  });
};
//# sourceMappingURL=blogRoutes.dev.js.map
