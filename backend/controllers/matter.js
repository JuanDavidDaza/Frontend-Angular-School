const Matter = require("../models/matter");
const Course = require("../models/course");
const User = require("../models/user");

const registerMatter = async (req, res) => {
  
  if (
    !req.body.name ||
    !req.body.numberStudent ||
    !req.body.teacher ||
    !req.body.course ||
    !req.body.place
  )
    return res.status(400).send("Incomplete data");

  let existingMatter = await Matter.findOne({ name: req.body.name });
  if (existingMatter)
    return res.status(400).send("The Matter is already registered");

  let course = await Course.findOne({ name: req.body.course });
  if (!course) return res.status(400).send("No course was assigned");

  let teacher = await User.findOne({ namet: req.body.teacher });
  if (!teacher) return res.status(400).send("No teacher was assigned");

  let matter = new Matter({
    name: req.body.name,
    numberStudent: req.body.numberStudent,
    teacherId: teacher._id,
    courseId: course._id,
    place: req.body.place,
    dbStatus: true,
  });

  let result = await matter.save();
  if (!result) return res.status(400).send("Failed to register Matter");
  res.status(200).send({ matter });
};

const listMatter = async (req, res) => {
  let matter = await Matter.find({ name: new RegExp(req.params["name"], "i") })
    .populate("courseId")
    .populate("teacherId")
    .exec();
  if (!matter || matter.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send({ matter });
};
module.exports = { registerMatter, listMatter };
