import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

// this function is the action creator
export function saveCourse(course) {
  // return the promise that is generated right here from calling courseApi.saveCourse
  // this way the caller will be notified when the promise resolves
  return courseApi.saveCourse(course).then((savedCourse) => {
    // this registers the action w/ the dispatcher
    // ("go tell all the stores that a course was just updated")
    dispatcher.dispatch({
      // this is the action (payload) to send to the subscribing stores
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
    });
  });
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id,
    });
  });
}
