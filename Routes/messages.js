const express = require("express");
const router = express.Router();
const MessageController = require("../Controllers/MessageController");

router.get("/:id", MessageController.getMessagebyId);
router.get("/", MessageController.getMessages);
router.post("/", MessageController.createMessage);

module.exports = router;
