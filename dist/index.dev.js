"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cookieSession = require("cookie-session");

var passport = require("passport");

var bodyParser = require("body-parser");

var keys = require("./config/keys");

require("./models/User");

require("./models/Blog");

require("./services/passport");

require("./services/cache");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var app = express();
app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

require("./routes/blogRoutes")(app);

if (["production"].includes(process.env.NODE_ENV)) {
  app.use(express["static"]("client/build"));

  var path = require("path");

  app.get("*", function (req, res) {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Listening on port", PORT);
});
//# sourceMappingURL=index.dev.js.map
