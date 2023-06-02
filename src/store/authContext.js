import { useState, useEffect, useCallback, createContext } from 'react'
import axios from 'axios'

const AuthContext = createContext({
  token: '',
  login: () => {},
  logout: () => {},
  userId: null
})


export const AuthContextProvider = (props) => {

  const [userId, setUserId] = useState(null)


 

  const login = (userId) => {
    setUserId(userId)
  }

  const logout = () => {

  }

  useEffect(() => {
    axios.get('/api/user')
      .then(res => {
        setUserId(res.data.userId)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const contextValue = {
    login,
    logout, 
    userId
  }
  console.log(contextValue)

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
