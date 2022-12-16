import { options } from './keys.js'

const urlCatalog = (size,genre,by,order) =>  `https://anime-db.p.rapidapi.com/anime?page=1&size=${size}&genres=${genre}&sortBy=${by}&sortOrder=${order}`
const urlGenres = 'https://anime-db.p.rapidapi.com/genre'

// Funcion para obtener la lista completa de animes
export const getCatalog = async (size,genre,by,order) => {
    const request = await fetch(urlCatalog(size,genre,by,order),options)
    const json = await request.json()
    const {data} = json
    return data
}

// Funcion para obtener los generos
export const getGenres = async () => {
    const request = await fetch(urlGenres,options)
    const json = await request.json()
    return json
}