import React from 'react'
import '../css/App.css';

// event handling - responding to user interaction
// click
// you must not respond to user interaction until the user does it
const Events = () => {
    const handleClick = () => {
        console.log("user clicked");

    }
    const handleClickAgain = (name) => {
        console.log(name + " clicked me");
    }
  return (
    <div>
      <input type="text" placeholder='Email' />
        <h1>USER INTERACTION</h1>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=> handleClickAgain("john")}>Click Again</button>
        
    </div>
  )
}

export default Events