import { createContext, useState } from 'react'

// Create context with default values instead of null
export const ThemeContext = createContext({
    theme: 'dark',
    setTheme: (() => { }) as React.Dispatch<React.SetStateAction<string>>,
    toggleTheme: () => { }
});

type ThemeProps = {
    children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeProps) => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
