import { options } from './keys.js'

// Funcion para obtener la lista completa de animes
export const getCatalog = async (page,genre,by,order) => {
    const url = genre === "All"
        ?   `https://anime-db.p.rapidapi.com/anime?page=${page}&size=18&sortBy=${by}&sortOrder=${order}`
        :   `https://anime-db.p.rapidapi.com/anime?page=${page}&size=18&genres=${genre}&sortBy=${by}&sortOrder=${order}`

    const request = await fetch(url,options)
    const json = await request.json()
    const {data} = json
    return data
}

// Funcion para obtener los generos
export const getGenres = async () => {
    const url = 'https://anime-db.p.rapidapi.com/genre'
    const request = await fetch(url,options)
    const json = await request.json()
    return json
}

// Funcion para obtener detalles de anime
export const getDetail = async (id) => {
    const url = `https://anime-db.p.rapidapi.com/anime/by-id/${id}`
    const request = await fetch(url,options)
    const json = await request.json()
    return json
}

// Funcion para buscar anime 
export const getSearchAnime = async (anime) => {
    const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${anime}`
    const request = await fetch(url,options)
    const json = await request.json()
    const {data} = json
    return data
}