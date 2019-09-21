var express = require("express");
var router = express.Router();
var db = require("../db");
router.get("/create", (req, res) => res.render("user/create"));

router.get("/", (req, res) =>
  res.render("user/index", { users: db.get("user").value() })
);
router.get("/search", (req, res) => {
  var q = req.query.q;
  var searchuser = user.filter(function(user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("user/index", {
    users: searchuser
  });
});
router.get("/:id", (req, res) => {
  var id2 = parseInt(req.params.id);

  console.log(id2);

  var user = db
    .get("user")
    .find({ id: id2 })
    .value();

  console.log(user.name);
  res.render("user/view", { user: user });
});
router.post("/create", (req, res) => {
  db.get("user")
    .push(req.body)
    .write();
  res.redirect("/user");
});
module.exports = router;
