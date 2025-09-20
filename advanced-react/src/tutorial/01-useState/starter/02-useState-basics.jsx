import { useState } from "react";

const UseStateBasics = () => {
  //console.log(useState());
  //const value = useState('Hello')[0];
  //const func = useState('Hello')[1];
  //console.log(value);
  //console.log(func);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count +1);
  };
  return (
    <>
    <h4>You clicked me {count} times</h4>
    <button type="button" className="btn" onClick={handleClick}>click me</button>
  </>
  );
};

export default UseStateBasics;
