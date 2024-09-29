import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // it is like componentDidUpdate with [] 
  useEffect(()=>{
    // API calls
    const timer=setInterval(()=>{
      console.log("Namastey react op")
    },1000)
    console.log("useEffect")
    // this return is like componentWillUnmount 
    return ()=>{
      clearInterval(timer);
      console.log("useEffect return")
    }
  },[])
  console.log("render")
  return (
    
    <div>
      <h3>Profile Functional Component :{props?.name}</h3>
      <h3>Count :{count}</h3>
      <button
        onClick={() => {
          setCount(1);
          setCount2(1);
        }}
      >
        SetCount
      </button>
    </div>
  );
};

export default Profile;
