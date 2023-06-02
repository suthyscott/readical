import { NavLink } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import AuthContext from "../store/authContext"


const Header = () => {
  const {userId} = useContext(AuthContext)

  return (
    userId ? (
      <nav>
        <NavLink to='/'>Landing</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/addBook'>Add a new book</NavLink>
    </nav>
    ) : null
  )
}

export default Header