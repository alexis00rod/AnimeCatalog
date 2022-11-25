import { useState, useEffect, createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimeListDB, getAnimeRanking, getGenreDB } from '../service/getData'

const CatalogContext = createContext()
export const useCatalogContext = () => useContext(CatalogContext)

export const CatalogProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [catalog, setCatalog] = useState([])
    const [catalogSize, setCatalogSize] = useState(15)
    const [rankingAnime, setRankingAnime] = useState([])
    const [genres, setGenres] = useState([])
    const [filter, setFilter] = useState("")
    const {genre} = useParams()

    useEffect(() =>{
        getAnimeRanking()
        .then(resp => setRankingAnime(resp))

        getAnimeListDB(filter,catalogSize,"ranking","asc")
        .then(resp => setCatalog(resp))
        .finally(() => setLoading(true))

        getGenreDB()
        .then(resp => setGenres(resp))

    },[filter,catalogSize,genre])

    return (
        <CatalogContext.Provider value={{loading,catalog,catalogSize,setCatalogSize,rankingAnime,genres,filter,setFilter}}>
            {children}
        </CatalogContext.Provider>
    )
}