const { Router } = require("express");
const { UserModel } = require("../models/User.model");
const userController = Router();


// routes for post user profile
userController.post("/profile", async (req, res) => {
  var currentDate = new Date();


  try {
    let data = await UserModel({ ...req.body, accCreated: currentDate });
    await data.save();

    res.status(200).send({ msg: "user created successfully!" });
  } catch {
    res.status(500).status("error");
  }
});

module.exports = userController;
