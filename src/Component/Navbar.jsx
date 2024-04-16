import React from 'react'
import "../../public/Css/Navbar.css"

function Navbar({user}) {
  return (
    <>
        <nav>
            <img src={user.avatar_url}
                width='50' height='50'
            alt="" />
            <h3>{user.name}</h3>
            <a href="">Search for other user</a>
        </nav>
    </>
  )
}

export default Navbar