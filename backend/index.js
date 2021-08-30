const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const User = require("./routes/user");
const Role = require("./routes/role");
const Course = require("./routes/course");
const Matter = require("./routes/matter");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/user", User);
app.use("/api/role", Role);
app.use("/api/course", Course);
app.use("/api/matter", Matter);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

dbConnection();
