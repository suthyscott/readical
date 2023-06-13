import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const BookDetails = () => {
    const { bookId } = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState({})
    const [editing, setEditing] = useState(false)
    const [progress, setProgress] = useState(null)

    const getBookDeets = () => {
        axios
            .get(`/api/book/${bookId}`)
            .then(res => {
                setBook(res.data)
                setProgress(res.data.progress)
            })
            .catch(err => console.log(err))
    }

    useEffect(getBookDeets, [])

    const handleSubmitEdit = e => {
        e.preventDefault()
        axios
            .put("/api/book", { bookId: book.id, progress })
            .then(res => {
                console.log(res.data)
                setEditing(false)
                setBook(res.data)
                setProgress(res.data.progress)
            })
            .catch(err => console.log(err))
    }

    const deleteBook = () => {
      axios.delete(`/api/book/${book.id}`)
        .then(res => {
          console.log(res)
          navigate('/home')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <section>
                {editing ? (
                    <form onSubmit={e => handleSubmitEdit(e)}>
                        <input
                            value={progress}
                            type="number"
                            onChange={e => setProgress(e.target.value)}
                        />
                        <button>Submit</button>
                    </form>
                ) : (
                    <p>
                        {book.progress}/{book.length} pages read
                    </p>
                )}
                <button onClick={() => setEditing(!editing)}>
                    {editing ? "Cancel" : "Edit progress"}
                </button>
            </section>
            <p>{book.desc}</p>
            <img src={book.imgUrl} />

            <div>
                <h4>Topics:</h4>
                {book.book_topics?.map(top => {
                    return <p>{top.topic.topicName}</p>
                })}
            </div>

            <button onClick={deleteBook}>Delete Book</button>
        </div>
    )
}

export default BookDetails
