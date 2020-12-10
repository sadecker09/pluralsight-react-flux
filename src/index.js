import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

// index.js is the entry point of the app

// By wrapping App in Router, we can declare routes in any of this App's components
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
