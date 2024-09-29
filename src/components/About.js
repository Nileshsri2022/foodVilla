import React, { Component } from "react";
import ProfileFunctionalComponent from "./Profile.js";
import Profile from "./ProfileClass";
import { Outlet } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    
    console.log("Parent-constructor");
  }
  // why callback func on useEffect make async?
   componentDidMount() {
    console.log("Parent-ComponentDidMount");
    
  }
  render() {
    console.log("Parent-render");
    return (
      <div>
        <h1>About Us</h1>
        <p>{""}This is the about page.</p>

        <ProfileFunctionalComponent name="Nilesh Srivastava"/>
        {/* <Profile name="First Child" /> */}
        {/* <Profile name="Second Child" /> */}
      </div>
    );
  }
}
export default About;
// there are two stages
// 1.Render phase - where Parent(Constructor then render) and then the child(Constructor then render) called
// 2.Commit phase - where it actually update the Dom it is called stack pop method
// LifeCycle =>
// Parent-constructor
// Parent-render
// child-constructor
// child-render()
// child-componentDidMount
// Parent-ComponentDidMount

/**
 * Parent Constructor
 * Parent render
 *    First Child-Constructor
 *    First Child-Render
 *    Second Child-Constructor
 *    Second Child-Render
 *    First Child-ComponentDidMount
 *    Second Child-ComponentDidMount
 * Parent -ComponentDidMount
 *
 *
 *
 */
