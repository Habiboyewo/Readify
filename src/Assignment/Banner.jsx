import React from 'react'
import './css/Banner.css';
import image from '../assets/books.jpeg'
import image2 from '../assets/plant.jpg'
import 'animate.css'

const Banner = () => {
  return (
    <div>
        <div>
        <section className='banner'>
            <div>
                <h1 className='animate__animated animate__fadeInLeft'>Read A Book Today</h1>
                <p className='para'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ipsam odio voluptas facilis, necessitatibus mollitia pariatur perspiciatis, iste laborum illo incidunt recusandae enim accusantium reprehenderit.
                </p>
                <a href="#below" className='text-decoration-none'>
                <button className="navbtn butn">
                    GET ONE
                </button>
                </a>
                
            </div>
            <div className='image'>
                    <img className='img' src={image}  alt=""  width={250} height={180} />
                    <img className='img1' src={image2} alt="" width={350} height={550}/>
            </div>
        </section>
        </div>
    </div>
  )
}

export default Banner