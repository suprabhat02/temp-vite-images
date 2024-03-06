import React from 'react'
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useGlobalContext } from './context';

const ThemeToggle = () => {
    const { isDarkTheme,
        toggleDarkTheme } = useGlobalContext()
    return (
        <section className='toggle-container'>
            <button className="dark-toggle" onClick={toggleDarkTheme}>
                {
                    isDarkTheme
                        ? <BsFillMoonStarsFill className="toggle-icon" />
                        : <BsFillSunFill className="toggle-icon" />
                }
            </button>
        </section>
    )
}

export default ThemeToggle