import { useState, useEffect, useContext } from "react"
import axios from "axios"
import AuthContext from "../store/authContext"
import '../css/Landing.css'

const Landing = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)
    const authCtx = useContext(AuthContext)
    console.log(authCtx)
    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post(register ? "/api/register" : "/api/login", {
                username,
                password
            })
            .then(res => {
                authCtx.login(res.data.userId)
            })
            .catch(err => console.log(err))
    }
    return (
        <main id="landing-container">
            {register ? (
                <form onSubmit={e => handleSubmit(e)}>
                    <input
                        placeholder="username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button>Register</button>
                </form>
            ) : (
                <form onSubmit={e => handleSubmit(e)}>
                    <input
                        placeholder="username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button>Log in</button>
                </form>
            )}
            <button onClick={() => setRegister(!register)}>
                Need to {register ? "log in?" : "register?"}
            </button>
        </main>
    )
}

export default Landing
