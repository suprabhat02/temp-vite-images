import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => false)
    const [searchTerm, setSearchTerm] = useState(`SHIV`)

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        const body = document.querySelector(`body`)
        body.classList.toggle(`dark-theme`, newDarkTheme)
    }
    return <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm, URL }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}