import React, {useState, useEffect} from 'react'
import '../css/Homes.css';

const Homes = () => {
    const url = "https://example-data.draftbit.com/properties?_limit=10"
    const [homes, setHomes] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async() => {
        try {
          const response = await fetch(url);
          const data = await response.json();
            console.log(data);
            setHomes(data)
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    if (isLoading) {
        return <h1 className='text-danger'>LOADING...............</h1>
    }
  return (
    <div className='home'>
        <h1>
            Home Of Your Choice
        </h1>
        {
            homes.map((home)=>{
                const{id,image_url, name, description,monthly_rental_price} = home;
                return(
                    <section key={id}>
                        <img src={image_url} alt="" />
                        <h2>{name}</h2>
                        <h3>{description}</h3>
                        <p>${monthly_rental_price}</p>
                    </section>
                )
            })
        }
    </div>
  )
}

export default Homes