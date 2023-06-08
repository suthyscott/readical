import { NavLink } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import AuthContext from "../store/authContext"


const Header = () => {
  const {userId, logout} = useContext(AuthContext)

  return (
    userId ? (
      <nav className='flex justify-center items-center h-[10vh] bg-secondary'>
        <NavLink to='/home' className='mx-10'>Home</NavLink>
        <NavLink to='/addBook' className='mx-10'>Add a new book</NavLink>
        <button onClick={logout} className='mx-10'>Logout</button>
    </nav>
    ) : null
  )
}

export default Header