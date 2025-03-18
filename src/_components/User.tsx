import { useState } from 'react'
import {userType} from '../types/app'
const User = () => {
    const [user, setUser] = useState<userType>({} as userType)
    return (
        <div>
            <button onClick={() => setUser({ name: "Bilel", age: 39 })}>Login</button>
            <button onClick={() => setUser({} as userType)}>Logout</button>
            <h2>User name is {user.name}</h2>
            <h2>User age is {user.age}</h2>
        </div>
    )
}

export default User