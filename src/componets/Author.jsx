import React, { useState, useEffect } from 'react'
import '../css/Author.css';

const Author = () => {
    const url = "https://example-data.draftbit.com/authors?_limit=20"
    const [author, setAuthor] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setAuthor(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    if (isLoading) {
        return <h1>LOADING...............</h1>
    }
    return (
        <div className='body'>u
            <h1>
                List Of User
            </h1>
            {
                author.map((author) => {
                    const { id, person, description, imgUrl, articleUrl } = author;
                    return (
                        <section key={id}>
                            <h2>Name: {person}</h2>
                            <h3>Description: {description}</h3>
                            <img src={imgUrl} alt="" /><br />
                            <a href={articleUrl} target='blank'>Read More</a>
                        </section>
                    );
                })
            }
        </div>
    )
}

export default Author