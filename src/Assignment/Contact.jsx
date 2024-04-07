import React, {useState, useEffect} from 'react'
import './css/Contact.css';
import Navbars from './Navbars';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [textarea, setTextArea] = useState("")
  // const [isError, setisError] = useState(false)
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showError = (show = false, msg, type) => {
    setAlert({ show, msg, type });
  };

  const removeAlert = () => {
    setAlert({ show: false, msg: "", type: "" });
  };
 

  const handleSubmit = () => {
    if (!email || !firstName) {
      showError(true, '* Fill in the necessary information *', 'danger')
    }

    else if (email.includes(("@" && ".com"))) {
      showError(true, "Subscribed successfully", "success");
      setEmail('')
      setfirstName('')
      setTextArea('')
      
    }

    else  {
      showError(true, "* Please enter a valid email address *", "danger");
      
      
    }
  };

  
  useEffect(() => {
    setTimeout(() => {
      const timeOut = setTimeout(() => {
        removeAlert();
      }, 3000);
      return () => clearTimeout(timeOut);
    });
  }, [alert.show]);

  return (
    <div>
        <Navbars/>
      <div>
          <h2 className='head'>
            Contact Us
          </h2>
          <div className='lined'>
          </div>
          
            <div className='formed'>
              <p className={alert.type} id="error">
                {alert.msg}
              </p>
              <input
               type="text" 
               name="first-name" 
               value={firstName}
               placeholder='Name'
               onChange={(e) => setfirstName(e.target.value)}
               className='test' />
              <input
              className='form'
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea 
              name="textarea" 
              value={textarea}
              className='test'
              cols="30" 
              rows="5" 
              placeholder='What you wanna say?'
              onChange={(e) => setTextArea(e.target.value)}
              ></textarea>
              <button className='cbtn' onClick={handleSubmit}>Subscribe</button>
            </div>
      </div>

            <div className='text'>
                    ©{new Date().getFullYear()} <span className='footerspan'>Readify</span> All rights reserved
            </div>

    </div>
      
   
  )
}

export default Contact