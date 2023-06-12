import { useState, useEffect, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/authContext"
import CheckBox from "../elements/CheckBox"
import { useNavigate } from "react-router-dom"

const AddBook = () => {
    const [topics, setTopics] = useState([])
    const [selectedTopics, setSelectedTopics] = useState([])
    const [title, setTitle] = useState("")
    const [length, setLength] = useState(null)
    const [author, setAuthor] = useState("")
    const [desc, setDesc] = useState("")
    const [priority, setPriority] = useState(null)
    const [imgUrl, setImgUrl] = useState("")
    const [progress, setProgress] = useState(null)
    const { userId } = useContext(AuthContext)
    const navigate = useNavigate()

    const getTopics = () => {
        axios
            .get("/api/topics")
            .then(res => {
                setTopics(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(getTopics, [])

    const handleSelectTopic = top => {
        console.log("hit handle select", top)
        setSelectedTopics([...selectedTopics, top.id])
    }

    const handleUnselectTopic = top => {
        console.log("hit handle unselect", top)
        const index = selectedTopics.findIndex(topId => topId === top.id)
        console.log(index)
        selectedTopics.splice(index, 1)
        setSelectedTopics([...selectedTopics])
    }

    const handleSubmitForm = e => {
        e.preventDefault()
        const body = {
            title,
            author,
            length,
            desc,
            priority,
            imgUrl,
            progress,
            selectedTopics,
            userId
        }

        axios
            .post("/api/books", body)
            .then(res => navigate(`/details/${res.data.id}`))
            .catch(err => console.log(err))
    }

    console.log(selectedTopics)
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input
                    placeholder="Enter book title"
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    placeholder="Number of book pages"
                    type="number"
                    onChange={e => setLength(e.target.value)}
                />
                <input
                    placeholder="Author's name"
                    onChange={e => setAuthor(e.target.value)}
                />
                <input
                    placeholder="Book description"
                    onChange={e => setDesc(e.target.value)}
                />
                <input
                    placeholder="Reading priority"
                    type="number"
                    onChange={e => setPriority(e.target.value)}
                />
                <input
                    placeholder="Image URL"

                    onChange={e => setImgUrl(e.target.value)}
                />
                <input
                    placeholder="Pages read"
                    type="number"
                    onChange={e => setProgress(e.target.value)}
                />
                {topics.map(top => (
                    <CheckBox
                        top={top}
                        handleSelectTopic={handleSelectTopic}
                        handleUnselectTopic={handleUnselectTopic}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddBook
