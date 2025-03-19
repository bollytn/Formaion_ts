import { createContext } from "react"

type AuthUser = {
    name: string
    email: string
}

export const UserContext = createContext<AuthUser | null>(null)

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContextProvider = ({children}:UserContextProviderProps) => {
    return (
        <UserContext.Provider value={{ name: 'bilel', email: 'mahjoubi.bilel@gmail.com' }}>
            {children}
        </UserContext.Provider>
    )
}   