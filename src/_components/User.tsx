
const User = () => {

    const handleLogin = () => {
        console.log('Login')
    }

    const handleLogout = () => {
        console.log('Logout')
    }

    return (
        <div>
            <button onClick={handleLogin} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
            <button onClick={handleLogout} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Logout</button>

            <h2>User name is :</h2>
            <h2>User emainl is :</h2>

        </div>

)
}

export default User