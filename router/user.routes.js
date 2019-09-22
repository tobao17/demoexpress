var express = require("express");
var router = express.Router();
var controler = require("../controller/user.controller");

router.get("/create", controler.create);
router.get("/", controler.index);
router.get("/search", controler.search);
router.get("/:id", controler.viewid);
router.post("/create", controler.postcreate);
module.exports = router;
