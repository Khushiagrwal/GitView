import React from 'react'
import "../../public/Css/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar({user}) {
  return (
    <>
        <nav>
            <img src={user.avatar_url}
                width='50' height='50'
                alt="" />
            <h3>{user.name}</h3>
            <Link to="/">Search for another user</Link>
        </nav>
    </>
  )
}

export default Navbar