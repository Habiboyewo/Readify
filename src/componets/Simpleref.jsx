import React, {useState,useRef, useEffect} from 'react'


// prserves values between re-render and also doesn't cause a re-render
// target dom element
// return an object(current:)

const Simpleref = () => {
    const [name, setName] = useState("")
    const count = useRef(0)
  return (
    <div>
        <h1>Count : </h1>
            <input type="" />
    </div>
  )
}

export default Simpleref