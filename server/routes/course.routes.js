const { Router } = require("express");
const {
  getAllCourse,
  getOneCourse,
  createNewCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/course.controllers");

const router = Router();

router.get("/", getAllCourse);

router.get("/:id", getOneCourse);

router.post("/", createNewCourse);

router.delete("/:id", deleteCourse);

router.patch("/:id", updateCourse);

module.exports = router;
