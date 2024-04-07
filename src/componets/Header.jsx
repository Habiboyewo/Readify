import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
            <Link to= "/">
                <h1>Router</h1>
            </Link>
            <div>
                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    </div>
  )
}

export default Header