import React from "react"
import { useNavigate } from "react-router-dom"
import Draggable from "react-draggable"

const BookCard = ({ book }) => {
    const navigate = useNavigate()

    const eventHandler = (e, data) => {
      console.log(e, data)
    }

    return (
        <Draggable
          onStop={eventHandler}
        >
            <div className="h-[300px] w-[300px] border-solid border border-color-primary rounded-2xl flex flex-col justify-center items-center">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.length} pages</p>
                <p>{book.desc}</p>
                <button onClick={() => navigate(`/details/${book.id}`)}>
                    See more book details
                </button>
            </div>
        </Draggable>
    )
}

export default BookCard
