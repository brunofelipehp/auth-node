import { connect } from "../src/models/Connect";

require("dotenv").config();
export const bcrypt = require("bcrypt");
export const jwt = require("jsonwebtoken");
export const express = require("express");
export const User = require("../src/models/User");
const authRoutes = require("./routes/AuthRouter");
const userRoutes = require("./routes/UserRouter");

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);

app.listen(3333, () => {
  console.log("listening on port 3333");
});

connect();
