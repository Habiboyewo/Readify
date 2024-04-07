  import React from 'react'
  import image from '../assets/about.jpg'
  import './css/About.css';
  import Navbars from './Navbars';

  const About = () => {
    return (
      <div>
        <Navbars/>
          <div className='side'>
              <div>
                  <img className='about' src={image} alt=""/>
              </div>
              <div className='abt'>
                  <h2 className='h2'>
                      About Us
                  </h2>
                  <div className='line'>
                  </div>
                  <p className='page'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae. Aliquid sint numquam fugit labore suscipit? Tenetur quibusdam beatae ducimus, impedit dicta reiciendis obcaecati sed possimus cupiditate quod modi aspernatur dignissimos animi ea porro natus totam ratione mollitia harum illo.
                  </p>
                  <h2 className='h2'>
                      Our Vision
                  </h2>
                  <div className='line'>
                  </div>
                  <p className='page'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae. Aliquid sint numquam fugit labore suscipit? Tenetur quibusdam beatae ducimus, impedit dicta reiciendis obcaecati sed possimus cupiditate quod modi aspernatur dignissimos animi ea porro natus totam ratione mollitia harum illo.
                  </p>
              </div>
          </div>
          <div className='text'>
              ©{new Date().getFullYear()} <span className='footerspan'>Readify</span> All rights reserved
          </div>
          
      </div>
    )
  }

  export default About