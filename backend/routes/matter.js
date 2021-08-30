const express = require("express");
const router = express.Router();
const matterController = require("../controllers/matter");

router.post("/registerMatter", matterController.registerMatter);
router.get("/listMatter", matterController.listMatter);

module.exports = router;