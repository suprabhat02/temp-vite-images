import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext()
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value
        if (!searchValue) return
        setSearchTerm(searchValue.toLowerCase())
    }
    return (
        <section>
            <h1 className='title'>Unsplash images</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <input type="text"
                    className='form-input search-input'
                    name='search'
                    placeholder='cat' />
                <button className="btn" type='submit'>SEARCH</button>
            </form>
        </section>
    )
}

export default SearchForm