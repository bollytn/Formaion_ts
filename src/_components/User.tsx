import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const User = () => {

    const userContext = useContext(UserContext)

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Mahjoubi Bilel',
                email: 'mahjoubi.bilel@gmail.com'    
            })
        }
    }

    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLogin} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
            <button onClick={handleLogout} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Logout</button>

            <h2>User name is : {userContext?.user?.name}</h2>
            <h2>User emainl is : {userContext?.user?.email} </h2>

        </div>

)
}

export default User