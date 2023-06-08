import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const BookDetails = () => {
  const {bookId} = useParams()
  const [book, setBook] = useState({})

  return (
    <div>BookDetails</div>
  )
}

export default BookDetails