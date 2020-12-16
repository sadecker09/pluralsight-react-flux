import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  // array destructuring, both the courses variable and the setCourses function are declared here b/c
  // they are destructured from return of useState
  // if `useState([])` this means initialize with empty array

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    // since this component is connected to the store, when courses are added to the store, onChange() wil be called

    // cleanup on unmount
    return () => courseStore.removeChangeListener(onChange);
  }, []);
  // dependency array = empty array means to only run once

  /* Below was prior to refactoring to use store
  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
    // cannot be called `courses` b/c name collides with state variable `courses` declared above
  }, []);
*/

  function onChange() {
    setCourses(courseStore.getCourses()); // empty array if flux store is empty
  }

  // CoursePage considered the 'smart' component, focuses on state concerns
  // passes props down to child ('dumb' component)
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
