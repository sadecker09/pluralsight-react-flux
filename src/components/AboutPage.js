import React from "react";

// for demo purposes, use a class here but prefer functional components over class components
// see HomePage.js for example of functional component
// class components have one required method, render

class AboutPage extends React.Component {
  render() {
    return (
      // Adjacent jsx elements must be wrapped in a container (e.g. <div>)
      // But when possible use lighter weight React.Fragment which renders nothing
      // Two ways of declaring a fragment:
      // 1. empty tags <> </>
      // 2. <React.Fragment> </React.Fragment>
      <>
        <h2>About</h2>
        <p>This app uses React.</p>
      </>
    );
  }
}

export default AboutPage;
