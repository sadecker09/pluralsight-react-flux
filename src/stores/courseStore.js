import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  // allows React components to subscribe to the store so they are notified when changes occur
  addChangeListener(callback) {
    // "change" is the event to watch for, when change in store occurs then run function in callback provided
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  // define some handy functions that return data from the Flux store
  getCourses() {
      return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

// tell the dispatcher which action types this store should be notified about
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      // push the new course to the local array
      _courses.push(action.course);
      // Important! Anytime store changes, need to call emitChange
      // which will notify subscribed React components to update UI accordingly
      store.emitChange();
      break;
    default:
    // nothing to do
    // remember that every store's dispatcher receives every action
    // only need logic for the actions this store cares about
  }
});

export default store;
