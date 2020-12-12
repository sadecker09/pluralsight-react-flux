import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

function ManageCoursePage(props) {
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

  function handleSubmit(event) {
    event.preventDefault(); // prevents form from posting back to server
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageCoursePage;
