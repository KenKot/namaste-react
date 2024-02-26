import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("About Class Component Constructor()");
  }

  componentDidMount() {
    //constructor() --> render() --> componentDidMount
    // console.log("Parent componentDidMount()");
  }

  render() {
    // console.log("About Class Component render()");

    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is namaste react</h2>

        <h3>Functional Component:</h3>
        {/* <User name={"Jimmy"} location={"France"} email={"Jimmy@gmail.com"} /> */}
        <h3>Class Based Component:</h3>
        <UserClass
          name={"Jimmy"}
          location={"France"}
          email={"Jimmy@gmail.com"}
        />
        {/* <UserClass
          name={"Bobby"}
          location={"England"}
          email={"Bobby@gmail.com"}
        /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste react</h2>

//       <h3>Functional Component:</h3>
//       <User name={"Jimmy"} location={"France"} email={"Jimmy@gmail.com"} />
//       <h3>Class Based Component:</h3>
//       <UserClass
//         name={"Bobby"}
//         location={"England"}
//         email={"Bobby@gmail.com"}
//       />
//     </div>
//   );
// };
export default About;
