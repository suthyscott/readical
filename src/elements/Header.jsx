import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'

const Header = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('/api/user')
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    user.userId ? (
      <nav>
        <NavLink to='/'>Landing</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/addBook'>Add a new book</NavLink>
    </nav>
    ) : null
  )
}

export default Header