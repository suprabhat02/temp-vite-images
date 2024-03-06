import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useGlobalContext } from './context'

// const API_KEY = `1aPSsdRCyRtgaj-Tw4xP331pTHvAGx9yIfgEU384YVo`
const URL = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`
const Gallery = () => {

    const { searchTerm } = useGlobalContext()
    const { data, isLoading, isError } = useQuery({
        queryKey: ["images", searchTerm],
        queryFn: async () => {
            const result = await axios.get(`${URL}&query=${searchTerm}`)
            return result?.data
        }
    })
    if (isLoading) {
        return <section className='image-container'>
            <h4>LOADING....</h4>
        </section>
    }
    if (isError) {
        return <section className='image-container'>
            <h4>ERROR....</h4>
        </section>
    }
    const results = data?.results

    if (results && Array.isArray(results) && results?.length < 1) {
        return <section className='image-container'>
            <h4>NO RESPONSE FOUND....</h4>
        </section>

    }

    return (
        <section className='image-container'>
            {
                results.map(item => {
                    const url = item?.urls?.regular
                    return <img src={url} key={item?.id} alt={item?.alt_description} className='img' />
                })
            }
        </section>
    )
}

export default Gallery