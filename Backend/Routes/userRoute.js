const express = require("express");
const userController = require("../Controllers/userController");

const router = express.Router();

router.route("/").post(userController.createSectors);
// router.route("/:id").put(userController.updateUser);
router.route("/").get(userController.getSectors);
module.exports = router;
