import React, {useState} from 'react'
import './css/Footer.css';


const Footer = () => {
        const [email, setEmail] = useState('');
        const [error, setError] = useState("");
        const handleSubmit = (e) => {
           e.preventDefault()
           if (!email || !email.includes('@')) {
            setError("*Please enter a valid email address*")
           }else{
            setError("successfully")
           }
        }
        
  return (
    <div>
        <div className='footer'>
            <div>
                <h2>Join our newsletter and get <span className='footerspan'>20%</span> off</h2>
                <p className='parap'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi inventore reic 
                    iendis voluptate beatae in sapiente eum officia. Assumenda, repellendus?
                </p>
            </div>
            <form>
                <p>{error}</p>
                <input 
                className='input'
                type="email"
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <a href="#">
                    <button className='bttn' onClick={handleSubmit}>
                        Subscribe
                    </button>
                </a>
            </form>
        </div>
        <div className='text'>
            ©{new Date().getFullYear()} <span className='footerspan'>Readify</span> All rights reserved
        </div>
    </div>
  )
}

export default Footer