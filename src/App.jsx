import React from 'react'
import './css/App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Home from "./Pages/Home"
import Profile from './Pages/Profile'
import Error from './Pages/Error'
import Header from './componets/Header'
import Post from './Pages/Post'
import Admin from './Pages/Admin'
import User from './Pages/User'
import Settings from './Pages/Settings'
import Landingpage from './Assignment/Landingpage'
import Dashboard from './Pages/Dashboard'
import Contact from './Assignment/Contact'
import About from './Assignment/About'
import SingleBookPage from './Assignment/SingleBookPage'


function App() {
  return (

    <>
      {/* <Router>
        <Header/>
         <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/profile' element = {<Profile/>}/>
            <Route path="about-us" element = {<Navigate to="/about"/>}/>
            <Route path="/post/:postId" element ={<Post/>}/>


            <Route path="/dashboard" element = {<Dashboard/>}>
                <Route path="settings" element = {<Settings/>}/>
                <Route path = "user" element = {<User/>}/>
                <Route path = "admin" element = {<Admin/>}/>
            </Route>

            <Route path='*' element = {<Error/>}/>
         </Routes>
      </Router> */}
      <Router>
        <Routes>
          <Route path='/' element = {<Landingpage/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/SingleBookPage/:bookId' element = {<SingleBookPage/>}/>
          <Route path='*' element = {<Error/>}/>
        </Routes>
      </Router>
  
    
    
    </>
  )
}

export default App