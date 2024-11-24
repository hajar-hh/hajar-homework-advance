const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/connectDB");

// middleware
const logger = require("./middlewares/logger");

// router
const courseRoutes = require("./routes/course.routes");

const app = express();
app.use(cors(), logger, express.json(), express.urlencoded({ extended: true }));

app.use("/course", courseRoutes);

app.get("/", (request, response) => {
  response.send("<h1>Hello World<h1/>");
});

app.get("*", (request, response) => {
  response.status(404).send("<h1 style='color:red'>404<h1/>");
});

const PORT = process.env.PORT || 5050;

async function start() {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log("server run on port", PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
