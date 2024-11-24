const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is require!!"],
    maxlength: [10, "your course title should be 10 characters"],
  },
  category: String,
  slug: String,
});

// const CourseModel = model("courses", CourseSchema);
// module.exports = CourseModel;

module.exports = model("courses", CourseSchema);
