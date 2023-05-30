import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav>
        <NavLink to='/'>Landing</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/addBook'>Add a new book</NavLink>
    </nav>
  )
}

export default Header