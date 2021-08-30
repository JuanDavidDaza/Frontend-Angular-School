const Course = require("../models/course");

const registerCourse = async (req, res) => {
  if (!req.body.name || !req.body.school)
    return res.status(400).send("Incomplete data");

  let existingCourse = await Course.findOne({ name: req.body.name });
  if (existingCourse)
    return res.status(400).send("The Course is already registered");

  let course = new Course({
    name: req.body.name,
    school: req.body.school,
    dbStatus: true,
  });

  let result = await course.save();
  if (!result) return res.status(400).send("Failed to register Course");
  res.status(200).send({ course });
};

module.exports = { registerCourse };
