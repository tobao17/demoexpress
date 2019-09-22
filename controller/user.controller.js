var db = require("../db");
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
  res.render("user/index", {
    users: searchuser
  });
};
module.exports.viewid = (req, res) => {
  var id2 = parseInt(req.params.id);

  console.log(id2);

  var user = db
    .get("user")
    .find({ id: id2 })
    .value();

  console.log(user.name);
  res.render("user/view", { user: user });
};
module.exports.postcreate = (req, res) => {
  db.get("user")
    .push(req.body)
    .write();
  res.redirect("/user");
};
