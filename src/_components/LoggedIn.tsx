import { useState } from 'react'
const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <h1>Logged In</h1>
            <button onClick={handleLogin}>Log Out</button>
            <button onClick={handleLogout}>Log In</button>
            <h2>User is {isLoggedIn ? "logged in" : "logged out"}</h2>
        </div>
    )
}

export default LoggedIn