/* this is the class component version only for demo purposes; see CoursesPage.js which is the functional version */
import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage_ClassComponentVersion extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  */
  // the above is equivalent to below
  state = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then((courses) => this.setState({ courses: courses }));
  }

  render() {
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
            {this.state.courses.map((course) => {
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
}

// export default CoursesPage;
