import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is namaste react</h2>

      <h3>Functional Component:</h3>
      <User name={"Jimmy"} location={"France"} email={"Jimmy@gmail.com"} />
      <h3>Class Based Component:</h3>
      <UserClass
        name={"Bobby"}
        location={"England"}
        email={"Bobby@gmail.com"}
      />
    </div>
  );
};
export default About;
