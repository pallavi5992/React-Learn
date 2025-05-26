import {Component} from "react";
import User from "./User";
import UserClass from "./UserCalss";

class About extends Component {
  constructor(props) {
    super(props)
    console.log("parent constructor")
  }

  componentDidMount(){
     console.log("parent component did mount")
  }
  render() {
    console.log("Parent render")
    return (
      <div>
        <h1>About</h1>
        <User name={"Pallavi from function Component"} />
        <UserClass detail={"Pallavi from Class Component"} />
      </div>
    );
  }
}


export default About;
