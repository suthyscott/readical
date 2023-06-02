import { NavLink } from "react-router-dom"
import { useEffect, useState,useContext } from "react"
import axios from 'axios'
import AuthContext from "../store/authContext"

const Header = () => {
  const {userId} = useContext(AuthContext)
  // const [user, setUser] = useState({})

  // useEffect(() => {
    
  // }, [])
  console.log(userId)
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