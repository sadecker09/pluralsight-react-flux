import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug; // from the path '/courses/:slug'
    if (slug) {
      // courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
      // the above api call was before implementation of Flux store below

      // queries the store for the course
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.match.params.slug]);

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
    courseActions.saveCourse(course).then(() => {
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
