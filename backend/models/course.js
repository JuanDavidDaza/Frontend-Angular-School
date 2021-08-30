const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  name: String,
  school: String,
  data: { type: Date, default: Date.now },
});

const course = mongoose.model("course", courseSchema);
module.exports = course;
