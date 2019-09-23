var db = require("../db");
var shortid = require("shortid");
module.exports.index = (req, res) =>
  res.render("user/index", { users: db.get("user").value() });
module.exports.create = (req, res) => res.render("user/create");
module.exports.search = (req, res) => {
  var q = req.query.q;
  var searchuser = db
    .get("user")
    .value()
    .filter(function(user) {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
  console.log("dm m ra khong con cho");
  res.render("user/index", {
    users: searchuser
  });
};
module.exports.viewid = (req, res) => {
  var id2 = req.params.id;

  console.log(id2);

  var user = db
    .get("user")
    .find({ id: id2 })
    .value();

  console.log(user.name);
  res.render("user/view", { user: user });
};
module.exports.postcreate = (req, res) => {
  req.body.id = shortid.generate();
  var error = [];
  if (!req.body.name) {
    error.push("Name is required");
  }
  if (!req.body.Phone) {
    error.push("Phone is required");
  }

  if (error.length) {
    res.render("user/create", { error: error, values: req.body });
    return;
  }
  db.get("user")
    .push(req.body)
    .write();
  res.redirect("/user");
};
