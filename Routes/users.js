const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");

// route with id goes first!!!
router.get("/:id", UserController.getUserById);
router.get("/", UserController.getUsers);
router.post("/", UserController.newUser);

module.exports = router;
