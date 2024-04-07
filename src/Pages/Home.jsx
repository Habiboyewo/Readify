import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
/////programatic redirect
const Home = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState("");
    const redirect = useNavigate()
    const handleSubmit = (e) => {
       e.preventDefault()
       if (!email || !email.includes('@')) {
        setError("*Please enter a valid email address*")
       }else{
          redirect("/profile")
       }
    }

  return (
    <div>
      <h1>HOMEPAGE</h1> 
      <p text-color='danger'>{error}</p>
      <form>
        <input 
        type="email"
        placeholder='Enter Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
        <button 
        type='submit'
        onClick={handleSubmit}
        >Register</button>
      </form> 
    </div>
  )
}

export default Home