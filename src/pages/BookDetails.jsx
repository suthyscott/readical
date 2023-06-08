import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'

const BookDetails = () => {
  const {bookId} = useParams()
  const [book, setBook] = useState({})

  const getBookDeets = () => {
    axios.get(`/api/book/${bookId}`)
      .then(res => setBook(res.data))
      .catch(err => console.log(err))
  }

  useEffect(getBookDeets, [])
  console.log(book)
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.length} pages</p>
      <p>{book.desc}</p>


      <div>
        <h4>Topics:</h4>
        {book.book_topics?.map(top => {
          return <p>{top.topic.topicName}</p>
        })}
      </div>
    </div>
  )
}

export default BookDetails