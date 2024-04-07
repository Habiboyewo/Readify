import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../Assignment/css/SingleBookPage.css';
import axios from 'axios'
import Loading from '../Testing/Loading';
import Navbars from './Navbars'
import 'animate.css';

const SingleBookPage = () => {
    const {bookId} = useParams()
    const [book, setBook] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = `https://example-data.draftbit.com/books/`
    const finalUrl = `${url}${bookId}`
    const fetchData = async () => {
        setIsLoading(true)
        const {data} = await axios(finalUrl)
        setBook(data)
        setIsLoading(false)
    }
    
    useEffect(() =>{
        fetchData()
    },[bookId]);
    
    if (isLoading) {
        return <Loading/>
    }
  return (
    <div>
        <Navbars/>
        <Link to='/'>
            <button className='single'>
                BACK TO HOMEPAGE
            </button>
        </Link>
        <div className='singleflex'>
            <div>
            <img className='bookimage animate__animated animate__backInLeft' src={book.image_url} alt="" />
            </div>
            <div className='letters'>
                    <h1 className='booktitle'>{book.title}</h1>
                    <h4 className='authors'>{book.authors}</h4>
                    <p className='description'>
                        {book.description}
                    </p>
                    <hr />
                    <h3 className='singleh3'>
                    <span className='singlespan'>Pages:</span>  {book.num_pages}
                    </h3>
                    <h3 className={book.rating >= 4 ? 'text-success' : 'text-danger'}>
                        <span className='singlespan'>Ratings:</span> {book.rating}
                    </h3>
                    <h3 className='singleh3'>
                        <span className='singlespan'>Genres:</span> {book.genres}
                    </h3>
                    
            </div>
        </div>
        
        <div className='text'>
            ©{new Date().getFullYear()}<span className='footerspan'>Readify</span> All rights reserved
        </div>
    </div>
  )
}

export default SingleBookPage