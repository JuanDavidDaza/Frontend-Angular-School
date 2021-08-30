const mongoose = require("mongoose");

const matterSchema = new mongoose.Schema({
  name: String,
  numberStudent: Number,
  teacherId: { type: mongoose.Schema.ObjectId, ref: "user" },
  courseId:{ type: mongoose.Schema.ObjectId, ref: "course" },
  place: String,
  date: { type: Date, default: Date.now },
});

const matter = mongoose.model("matter", matterSchema);
module.exports = matter;
