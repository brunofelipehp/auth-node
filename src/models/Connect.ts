const mongoose = require("mongoose");
require("dotenv").config();

export async function connect() {
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASS;

  const conn = await mongoose
    .connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.0jryzlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
      console.log("Connection in database");
    })
    .catch((err) => {
      console.log(err);
    });

  return conn;
}
