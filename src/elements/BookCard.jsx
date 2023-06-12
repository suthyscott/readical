import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookCard = ({book}) => {
  const navigate = useNavigate()
  return (
    <div className='h-[300px] w-[300px] border-solid border border-color-primary rounded-2xl flex flex-col justify-center items-center'>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.length} pages</p>
      <p>{book.desc}</p>
      <p>Reading priority:{book.priority}</p>
      <button onClick={() => navigate(`/details/${book.id}`)}>See more book details</button>
    </div>
  )
}

export default BookCard