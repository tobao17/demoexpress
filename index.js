const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var user = [
  { id: 1, name: "Thinh" },
  { id: 2, name: "bao" },
  { id: 3, name: "bao" }
];
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => res.render("index", { name: "aaaa" }));
app.get("/user/create", (req, res) => res.render("user/create"));

app.get("/user", (req, res) => res.render("user/index", { users: user }));
app.get("/user/search", (req, res) => {
  var q = req.query.q;
  var searchuser = user.filter(function(user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("user/index", {
    users: searchuser
  });
});
app.post("/user/create", (req, res) => {
  user.push(req.body);
  res.redirect("/user");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
