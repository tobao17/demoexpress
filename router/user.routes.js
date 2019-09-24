var express = require("express");
var validate = require("../validate/user.validate");
var router = express.Router();
var controler = require("../controller/user.controller");

router.get("/", controler.index);

router.get("/create", controler.create);

router.get("/search", controler.search);

router.post("/create", validate.postcreate, controler.postcreate);
router.get("/:id", controler.viewid);
module.exports = router;
