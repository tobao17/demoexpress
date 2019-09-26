var express = require("express");

var router = express.Router();
var controler = require("../controller/login.controller");
router.get("/login", controler.login);
router.post("/login", controler.postlogin);
module.exports = router;
