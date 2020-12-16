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
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}