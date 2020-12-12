import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";
    setErrors(_errors);
    //Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault(); // prevents form from posting back to server
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved.");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
}

export default ManageCoursePage;
