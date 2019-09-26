var db = require("../db");
module.exports.requirelogin = (req, res, next) => {
  if (!req.cookies.userid) {
    res.redirect("/login/login");
    return;
  }
  var user = db
    .get("user")
    .find({ id: req.cookies.userid })
    .value();
  if (!user) {
    res.redirect("/login/login");
    return;
  }
  next();
};
