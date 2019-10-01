var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  Phone: String
});
var User = mongoose.model("User", userSchema, "user");
module.exports = User;
