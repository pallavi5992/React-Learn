import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("child constructor");
    this.state = {
      userinfo: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    // console.log("child component did mount")

    const data = await fetch("https://api.github.com/users/pallavi");
    const json = await data.json();
    console.log(json.name);
    this.setState({
      userinfo: json,
    });
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log("child render");

    const { name } = this.state.userinfo;

    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {" "}
          Increase
        </button>
        <h2>User Class Component</h2>
        <p>Name: {name}</p>
      </div>
    );
  }
}

export default UserClass;
