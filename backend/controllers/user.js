const User = require("../models/user");
const Role = require("../models/role");
const Course = require("../models/course");
const bcrypt = require("bcrypt");

const registerStudent = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.school ||
    !req.body.course || 
    !req.body.phone
  )
    return res.status(400).send("Incomplete data");

  let existingUser = await User.findOne({ email: req.body.email });
  if (existingUser)
    return res.status(400).send("The Student is already registered");

  let hash = await bcrypt.hash(req.body.password, 10);

  let role = await Role.findOne({ name: "student" });
  if (!role) return res.status(400).send("No role was assigned");

  let course = await Course.findOne({ name: req.body.course });
  if (!course) return res.status(400).send("No course was assigned");

  let user = new User({
    name: req.body.name,
    namet:null,
    school: req.body.school,
    couserId: course._id,
    phone: req.body.phone,
    email: req.body.email,
    password: hash,
    roleId: role._id,
    dbStatus: true,
  });

  let result = await user.save();
  if (!result) return res.status(400).send("Failed to register Student");

  try {
    let jwtToken = user.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

const registerTeacher = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.school|| 
    !req.body.phone
  )
    return res.status(400).send("Incomplete data");

  let existingUser = await User.findOne({ email: req.body.email });
  if (existingUser)
    return res.status(400).send("The Teacher is already registered");

  let hash = await bcrypt.hash(req.body.password, 10);

  let role = await Role.findOne({ name: "teacher" });
  if (!role) return res.status(400).send("No role was assigned");

  let user = new User({
    name: null,
    namet: req.body.name,
    school: req.body.school,
    couserId: null,
    phone: req.body.phone,
    email: req.body.email,
    password: hash,
    roleId: role._id,
    dbStatus: true,
  });

  let result = await user.save();
  if (!result) return res.status(400).send("Failed to register Student");

  try {
    let jwtToken = user.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};

const login = async (req, res) => {};

module.exports = {
  registerStudent,
  registerTeacher,
  login,
};
