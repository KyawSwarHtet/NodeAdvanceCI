"use strict";

var passport = require("passport");

module.exports = function (app) {
  app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
  }));
  app.get("/auth/google/callback", passport.authenticate("google"), function (req, res) {
    res.redirect("http://localhost:3000/blogs");
  });
  app.get("/auth/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/current_user", function (req, res) {
    res.send(req.user);
  });
};
//# sourceMappingURL=authRoutes.dev.js.map
