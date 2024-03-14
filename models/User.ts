import { mongoose } from "../src/app";

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

module.exports = User;
