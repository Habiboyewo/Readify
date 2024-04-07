import React,{ useState } from "react"
// usestate function ==> dispatch a change


const SimpleState = () => {
    const [name, setName] = useState("Ade")
    const [num, setNum] = useState(0)
    const [numb, setNumb] = useState(1)
    const handleChange = () => {
        if (name === "Ade") {
            setName("Wale")
        } else {
            setName("Ade")
        }
    }
  return (
    <div>
        <div>
            <h1>State Management</h1>
            <h2>{name}</h2>
            <button onClick={handleChange}>Change Name</button>
        </div>

       <div>
            <h1> vote count is {num}</h1>
            <button onClick={() => setNum(0)}>Reset</button>
            <button onClick={() => setNum(num + 1)}>Add</button>
            <button onClick={() => setNum(num - 1)}>Substract</button>
       </div>
       
        

        <h1>{numb}</h1>
        <button onClick={() => setNumb(numb + 5)}>Number</button>



    </div>
  )
}

export default SimpleState