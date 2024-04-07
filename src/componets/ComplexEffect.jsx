import React, {useState, useEffect} from 'react'
import '../css/ComplexEffect.css';
/*
 API - Applicatiom Programming Interface
 it allow two softwaree applications to communicate with each other and provide communication capabilities.
 REST API
 get access to the API'S(fetch APIS)
 Promise 

 .then
 async  /await
 JSON - javascript object notation
*/
const ComplexEffect = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
      const [users, setUsers] = useState([])
      const [isLoading, setIsLoading] = useState(true);

    // const getData = () => {
    //     fetch(url)
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         console.log(data);
    //       });
    //   };
    //   getData();
    const clear = () => {
        setUsers([]);
    }
    const fetchData = async() => {
        try {
          const response = await fetch(url);
          const data = await response.json();
            console.log(data);
            setUsers(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    }, [])
    if (isLoading) {
        return <h1>LOADING.......</h1>
    }
  return (
    <div>
        <h1>
            List of Users
        </h1>
        {
            users.map((user) =>{
                const {id, name, email, phone, address:{city}, website, company:{catchPhrase}, company:{name : companyName}, company:{bs}} = user;
                return(
                    <section key = {id}>
                    <h2>Name: {name}</h2>
                    <h3>Email: {email}</h3>
                    <h3>Company Name: {companyName}</h3>
                    <h4>Phone-Number: {phone}</h4>
                    <h4>City: {city}</h4>
                    <h4>Website: {website}</h4>
                    <h4>Company Catchphrase: {catchPhrase}</h4>
                    <h5>Bs: {bs}</h5>
                </section>
                );
                
            })
        }
        <button onClick={clear}>Clear list</button>
    </div>
  )
}

export default ComplexEffect 