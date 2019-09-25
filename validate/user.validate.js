module.exports.postcreate = (req, res, next) => {
  var error = [];
  if (!req.body.name) {
    error.push("Name is required");
  }
  if (!req.body.Phone) {
    error.push("Phone is required");
  }

  if (error.length) {
    res.render("user/create", { error: error, values: req.body });
    return;
  }
  next();
  //middleware : ham trung gian
  //validate: bat loi nguoi dung nhap vao
  //res.locals
};
