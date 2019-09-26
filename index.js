const express = require("express");
var userRoute = require("../demoexpress/router/user.routes");
var loginRoute = require("../demoexpress/router/login.router");
var cookieParser = require("cookie-parser");

const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => res.render("index", { name: "aaaa" }));
app.use("/user", userRoute);
app.use("/login", loginRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
