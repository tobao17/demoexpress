var express = require("express");
var validate = require("../validate/user.validate");
var router = express.Router();
var controler = require("../controller/user.controller");
var middleware = require("../middleware/middleware");

router.get("/", middleware.requirelogin, controler.index);

router.get("/create", controler.create);

router.get("/search", controler.search);
router.get("/cookie", (req, res) => {
  res.cookie("user-id ", 12345);
  res.send("hello ");
});

router.post("/create", validate.postcreate, controler.postcreate);
router.get("/:id", controler.viewid);
module.exports = router;
