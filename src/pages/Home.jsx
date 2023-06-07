import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import BookCard from '../elements/BookCard'

const Home = () => {
  const [books, setBooks] = useState([])
  const {userId} = useContext(AuthContext)

  const getUserBooks = () => {
    axios.get(`/api/books/${userId}`)
      .then(res => {
        console.log(res.data)
        setBooks(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUserBooks()
  }, [])

  return (
    <div>
      {books.map(book => <BookCard book={book}/>)}
    </div>
  )
}

export default Home