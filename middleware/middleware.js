var db = require("../db");
module.exports.requirelogin = (req, res, next) => {
  console.log(req.cookies, req.signedCookies);
  if (!req.signedCookies.userid) {
    res.redirect("/login/login");
    return;
  }
  var user = db
    .get("user")
    .find({ id: req.signedCookies.userid })
    .value();
  if (!user) {
    res.redirect("/login/login");
    return;
  }
  res.locals.user = user;
  next();
};
