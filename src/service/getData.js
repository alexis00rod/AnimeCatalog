import { options } from './keys.js'

// Funcion para obtener la lista completa de animes
export const getAnimeListDB = async (filter,size,sortBy,sortOrder) => {
    const url = filter ? 
    `https://anime-db.p.rapidapi.com/anime?page=1&size=${size}&search=${filter}&sortBy=${sortBy}&sortOrder=${sortOrder}`
    : 
    `https://anime-db.p.rapidapi.com/anime?page=1&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`
    const request = await fetch(url,options)
    const json = await request.json()
    const {data} = json
    return data
}

// Funcion para obtener la lista de generos
export const getGenreDB = async () => {
    const request = await fetch('https://anime-db.p.rapidapi.com/genre', options)
	const json = await request.json()
    return json
}

// Funcion para obtener el ranking de animes
export const getAnimeRanking = async () => {
    const request = await fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=6&sortBy=ranking&sortOrder=asc',options)
    const json = await request.json()
    const {data} = json
    return data
}

// Funcion para obtener los detalles de un anime
export const getAnimeDetail = async (id) => {
    const request = await fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${id}`,options)
    const json = await request.json()
    return json
}

// Funcion para obtener animes que se buscan 
export const getSearchAnime = async (param) => {
    const request = await fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=5&search=${param}&sortBy=ranking&sortOrder=asc`,options)
    const json = await request.json()
    return json
}