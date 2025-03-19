import { createContext } from 'react'

const ThemeContext = createContext<{
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    toggleTheme: () => void
} | null>(null)

export default ThemeContext 