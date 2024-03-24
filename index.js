const express = require("express");
const app = express();
const connection = require("./database/server");
const userController = require("./routes/user.routes");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/user", userController);

app.listen(PORT, async () => {
  console.log(`server is running on ${PORT}`);
  try {
    await connection;
    if (connection) {
      console.log("connected to the database");
    }
  } catch {
    console.log("error while connecting to database");
  }
});
