const express = require("express");
const app = express();
const port = 3000;
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ user: [] }).write();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => res.render("index", { name: "aaaa" }));
app.get("/user/create", (req, res) => res.render("user/create"));

app.get("/user", (req, res) =>
  res.render("user/index", { users: db.get("user").value() })
);
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
  db.get("user")
    .push(req.body)
    .write();
  res.redirect("/user");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
