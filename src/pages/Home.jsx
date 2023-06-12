import { useState, useEffect, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/authContext"
import BookCard from "../elements/BookCard"

const Home = () => {
  const { userId } = useContext(AuthContext)
    const [books, setBooks] = useState([])
    const [pressed, setPressed] = useState(false)

    const getUserBooks = () => {
        axios
            .get(`/api/books/${userId}`)
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
        // <div className="w-10/12 h-[350px] absolute overflow-hidden">
        //     <div className="w-[150%] flex gap-3 pointer-events-none absolute ">
            <div className="">
            <div className="">
                {books.map(book => (
                    <BookCard book={book} />
                ))}
            </div>
        </div>
    )
}

export default Home
