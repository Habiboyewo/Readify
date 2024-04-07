import React, { useState, useEffect } from 'react'
/*
 useefeeect runs on every re-render by default
 it takes in two parameters
 1.FUNCTION
 2.DEPENDENCY ARRAY LIST
*/
const SimpleEffect = () => {
    const [value, setValue] = useState(0)
    const [age, setAge] = useState(35)
    useEffect(() => {
        console.log("useEffect is called");
    }, [age, value])
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>Click Me</button>

            <h1>{age}</h1>
            <button onClick={() => setAge(age + 2)}>Change Age</button>
        </div>
    )
}

export default SimpleEffect