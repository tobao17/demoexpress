require("dotenv").config();
console.log();

var mongoose = require("mongoose");
const express = require("express");
var userRoute = require("../demoexpress/router/user.routes");
var loginRoute = require("../demoexpress/router/login.router");
var cookieParser = require("cookie-parser");

mongoose.connect(process.env.mongourl, { useNewUrlParser: true });
const port = 3000;

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.keycookie));
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => res.render("index", { name: "aaaa" }));
app.use("/user", userRoute);
app.use("/login", loginRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
