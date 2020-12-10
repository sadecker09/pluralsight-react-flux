import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  // array destructuring, both the courses variable and the setCourses function are declared here b/c they are destructured from return of useState
  // useState argument = [] means initialize with empty array

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
    // cannot be called `courses` b/c name collides with state variable `courses` declared above
  }, []);
  // dependency array = empty array  means to only run once

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoursesPage;
