import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'

const AddBook = () => {
  const [topics, setTopics] = useState([])
  const [selectTopics, setSelectedTopis] = useState([])
  const [title, setTitle] = useState('')
  const [length, setLength] = useState(null)
  const [author, setAuthor] = useState('')
  const [desc, setDesc] = useState('')
  const [priority, setPriority] = useState(null)
  const {userId} = useContext(AuthContext)

  const getTopics = () => {
    axios.get('/api/topics')
      .then(res => {
        setTopics(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(getTopics, [])

  const handleSelectTopic = (e) => {
    
  }

  console.log(topics)
  return (
    <div>
      <form>
        <input placeholder='Enter book title' onChange={e => setTitle(e.target.value)} />
        <input placeholder='Number of book pages' type='number' onChange={e => setLength(e.target.value)} />
        <input placeholder="Author's name" onChange={e => setAuthor(e.target.value)} />
        <input placeholder='Book description' onChange={e => setDesc(e.target.value)} />
        <input placeholder='Reading priority' type='number' onChange={e => setPriority(e.target.value)} />
        <select onChange={e => handleSelectTopic(e)}>
          {topics.map(topic => <option value={topic.id}>{topic.topicName}</option>)}
        </select>
      </form>
    </div>
  )
}

export default AddBook