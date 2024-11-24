const CourseModel = require("../models/course.model");

async function getAllCourse(req, res) {
  try {
    const result = await CourseModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getOneCourse(req, res) {
  try {
    const { id } = req.params;
    const result = await CourseModel.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function createNewCourse(req, res) {
  try {
    const data = req.body;
    const result = await CourseModel.create(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function deleteCourse(req, res) {
  try {
    const { id } = req.params;
    const result = await CourseModel.findOneAndDelete({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function updateCourse(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await CourseModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getAllCourse,
  getOneCourse,
  createNewCourse,
  deleteCourse,
  updateCourse,
};
