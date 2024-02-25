import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const {name, location, email} = this.props;
    let {count} = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            // never update state variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increase count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {email}</h4>
      </div>
    );
  }
}

export default UserClass;
