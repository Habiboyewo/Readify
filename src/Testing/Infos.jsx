import React from 'react'
import '../css/info.css';
import { useFetch } from '../hooks/useFetch';

const Infos = () => {
    const url = "https://reqres.in/api/users?page=1"
    const {
        data: {data: users},
        isLoading,
        isError
    } = useFetch(url);

    // git remote add origin https://github.com/AyoRichie1-ops/Readify.git
    // git branch -M main
    // git push -u origin main


    // const [infos, setInfos] = useState([])     
    // const [isLoading, setIsLoading] = useState(true)  
    // const [isError, setIsError] = useState(false)                                                                                            
    // const fetchData = async() => {
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         console.log(data);
    //         setInfos(data.data)
    //         setIsLoading(false)
    //     } catch (error) {
    //         setIsLoading(false)
    //         setIsError(true)
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])
    if (isLoading) {
        return <h1 className='load'> LOADING.................</h1>
    }
    if (isError) {
        return <h1>Ooops!! error while fetching data</h1>
    }
  return (
    <div>
         {/* <h1>HELLO</h1> */}
        {
            users.map((user) =>{
                const {id, first_name, last_name, email, avatar} = user
                return(

                    <section key={id}>
                        <img src={avatar} alt="" />
                        <h2>Name: {first_name} {last_name}</h2>
                        <p>Email: {email}</p>
                    </section>
                )
            })
            
        }
    </div>
    // <div>
    //     <h1>
    //         INFO OF CUSTOMERS
    //     </h1>
    //     {
    //         infos.map((info)=>{
    //             const {id, email, first_name, last_name, avatar} = info
    //             return(

    //                 <section key={id}>
    //                     <img src={avatar} alt="" />
    //                     <h2>Name: {first_name} {last_name}</h2>
    //                     <p>Email: {email}</p>
    //                 </section>
    //             )
    //         })
    //     }
    // </div>
  )
}

export default Infos