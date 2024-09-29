import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2:0,
    };
    this.state = {
      userInfo: {
        name: "John Doe",
        location: "Dummy location",
      },
    };
    console.log("child-constructor "+this.props.name)
  }
  // componentDidMount will call after first render
  async componentDidMount() {
    // API calls here
    console.log("child-componentDidMount "+this.props.name);
    const data = await fetch("https://api.github.com/users/nilesh");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  // componentDidUpdate will call after every next render
  componentDidUpdate(){
    console.log("child-componentDidUpdate "+this.props.name)
  }
  // if you use setInterval func inside componentDidMount you notice in console when you go to another route componentDidMount never stop calling to stop this use componentWillUnmount func
  // every time componentDidMount there is setInterval which creates new interval time after every render which reduces the performance of SPA
  // to clean up this use componentWillUnmount
  componentWillUnmount(){
    console.log("child-componentWillUnmount "+this.props.name)
  }
  render() {
    console.log("child-render() "+this.props.name)
    return (
      <div className="profile">
        <h3>Profile Class {this.props?.name}</h3>
        <h3>Name:{this.state?.userInfo.name}</h3>
        <h3>Location:{this.state?.userInfo.location}</h3>
        <img src={this.state?.userInfo.avatar_url} alt="" />
        <p>Count: {this.state.count}</p>
        <button onClick={() => {
            // WE DONT MUTATE STATE DIRECTLY
            // NEVER DO this.state=something
            this.setState({
            count:1,
            count2:1,
        });
        }}>SetCount</button>
      </div>
    );
  }
}
export default Profile;
/**
 * child constructor
 * child render
 * child componentDidMount
 * 
 * API call 
 * Set State
 * 
 * <UPDATE CYCLES>
 * render
 * 
 * 
 */
