import React, {useState} from 'react'

const Components = () => {
    const [users, setUsers] = useState([
        {id: '1', name: "John"},
        {id: '2', name: "Jane"},
        {id: '3', name: "Peter"},
        {id: '4', name: "Pekus"},
    ]);
   
    const clear = () =>{
        setUsers([]);
    }
    const removeUser = (id) =>{
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    }
   const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Ola",
    job: 'Scientist'
   })
   const change = () =>{
    setPerson({...person, job: 'Tech'});
   }
  return (
    <div>
          <h1>COMPLEX STATE</h1>
       {
       users.map((user,index) => {
        return <div key={index}>
            <h1>{user.name}</h1>
            <button onClick = {()=> removeUser(user.id)}>Remove</button>
        </div>
        
       })}
      <button onClick={clear}> Clear list</button>

      <div>
        <h1>Person Details</h1>
        <h1>
          {""}
          {person.firstName} {person.lastName}
        </h1>
       <h1>
        {person.job}
       </h1>
       <button onClick={change}>Change Job</button>

      </div>
      
    </div>
  )
}

export default Components