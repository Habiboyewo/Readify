import React from 'react'
import { useFetch } from '../hooks/useFetch'
import Loading from '../Testing/Loading'
import Error from '../Testing/Error'
import './css/HeroSection.css';
import 'animate.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const url = "https://example-data.draftbit.com/books?_limit=16"
    const {data:books,
          isLoading,
          isError,
    } = useFetch(url)


    if (isLoading) {
      return <Loading/>
  }
  if (isError) {
      return <Error/>
  }
  return (
    <div className='bg'>
            <h2 className='main'>
                Featured Books
            </h2>
            <div className='div'>
            </div>
        
      
          <div id='below' className='grid'>
          {
              books.map((book) =>{
                const{id, title, image_url, authors, rating} = book;
                return(
                    <section key={id}> 
                        <Link to={`/SingleBookPage/${id}`} className='text-decoration-none '>
                          <img className='animate__animated animate__heartBeat' src={image_url} alt="" width={275} height={300} />
                        </Link>
                        <h5>{title}</h5>
                        <div className='flex'>
                          <h6>{authors}</h6>
                          <h6 className={book.rating >= 4 ? 'text-success' : 'text-danger'}>
                          <span className='singlespan'>Ratings:</span> {rating}
                          </h6>
                        </div>
                        
                    </section>
                )
              })
            }
          </div>
      </div>
  )
}

export default HeroSection