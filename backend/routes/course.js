const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course");

router.post("/registerCourse", courseController.registerCourse);

module.exports = router;