import { createContext,useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const UserContext = createContext<AuthUser | null>(null)

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContextProvider = ({children}:UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </UserContext.Provider>
    )
}   