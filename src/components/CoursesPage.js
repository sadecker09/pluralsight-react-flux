import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  // array destructuring, both the courses variable and the setCourses function are declared here b/c
  // they are destructured from return of useState
  // useState argument = [] means initialize with empty array

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
    // cannot be called `courses` b/c name collides with state variable `courses` declared above
  }, []);
  // dependency array = empty array  means to only run once

  // CoursePage considered the 'smart' component, focuses on state concerns
  // passes props down to child ('dumb' component)
  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
