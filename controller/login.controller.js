var db = require("../db");
var md5 = require("md5");
var shortid = require("shortid");
module.exports.login = (req, res) => res.render("login/login");
module.exports.postlogin = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(password);
  var user = db
    .get("user")
    .find({ email: email })
    .value();
  if (!user) {
    res.render("login/login", {
      error: ["User does not exist!"],
      values: req.body
    });
    return;
  }
  var hashedpassword = md5(password);
  console.log(hashedpassword);
  if (user.password != hashedpassword) {
    console.log(user.password);
    res.render("login/login", { error: ["Wrongpassword!"], values: req.body });
    return;
  }
  res.cookie("userid", user.id);
  res.redirect("/user");
};
