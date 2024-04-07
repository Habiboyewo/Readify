import React from 'react'
import image from '../assets/404.jpg'
import '../css/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='bg p-3 vh-100 d-flex justify-content-center align-items-center '>
        <img src={image} alt="" />
    </div>
  )
}

export default Error