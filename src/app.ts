require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
export const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const User = require("../models/User");

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Created successfully" });
});

app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!password || !email) {
    return res.status(402).json({ msg: "email and password are required" });
  }

  if (!name) {
    return res.status(402).json({ msg: "name is required" });
  }

  if (password !== confirmPassword) {
    return res
      .status(402)
      .json({ msg: "password and password confirmation need to be the same" });
  }

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    return res
      .status(402)
      .json({ msg: "This user already exists. create another user" });
  }

  const salt = await bcrypt.genSalt(12);

  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({ name, email, password: passwordHash });

  try {
    await user.save();

    return res.status(201).json({ msg: "Created user successfully" });
  } catch (error) {
    return res.status(500).json({
      msg: "A server error occurred, please try again later",
    });
  }
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.0jryzlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(3333);
    console.log("Connection in database");
  })
  .catch((err) => {
    console.log(err);
  });
