const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");


router.post("/registerStudent", UserController.registerStudent);
router.post("/registerTeacher", UserController.registerTeacher);
router.post("/login", UserController.login);



module.exports = router;

