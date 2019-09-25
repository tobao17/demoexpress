var db = require("../db");
var shortid = require("shortid");
module.exports.index = (req, res) =>
  res.render("user/index", { users: db.get("user").value() });
module.exports.create = (req, res) => {
  console.log(req.cookies);
  res.render("user/create");
};
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

  res.render("user/view", { user: user });
};
module.exports.postcreate = (req, res) => {
  req.body.id = shortid.generate();

  db.get("user")
    .push(req.body)
    .write();
  res.redirect("/user");
};
