import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy ",
        location: "default location",
        email: "default email",
        // avatar_url: "http://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    //constructor() --> render() --> componentDidMount

    const data = await fetch("https://api.github.com/users/KenKot");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { name, location, email, avatar_url } = this.state.userInfo;

    console.log("Child Render");

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <img src={avatar_url} alt="" />
        <h4>Contact: {email}</h4>
      </div>
    );
  }
}

export default UserClass;
