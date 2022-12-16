import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Main,Card,Loader } from '../components/index'
import { getCatalog, getGenres } from '../service/fetch'

const GenreLink = ({genre}) => {
    return (
        <NavLink to={`${genre ? `/catalog/${genre}` : "/catalog"}`}
            className={({isActive}) => `debug w-max px-2 py-1 text-slate-100 bg-red-500 rounded-lg duration-300 hover:bg-red-600 ${isActive && "bg-red-700"}`}>
            {genre ? genre : "All"}
        </NavLink>
    )
}

export const CatalogPage = () => {
    const {genre} = useParams()
    const [catalog, setCatalog] = useState([])
    const [loading, setLoading] = useState(false)
    const [catalogSize, setCatalogSize] = useState(15)
    const [catalogGenre, setCatalogGenre] = useState("Fantasy")
    const [catalogSortBy, setCatalogSortBy] = useState("ranking")
    const [catalogSortOrder, setCatalogSortOrder] = useState("asc")
    const [genres, setGenres] = useState([])

    useEffect(() => {
        getCatalog(catalogSize,catalogGenre,catalogSortBy,catalogSortOrder)
        .then(resp => setCatalog(resp))
        .finally(() => setLoading(true))

        getGenres()
        .then(resp => setGenres(resp))

    },[catalogSize,catalogGenre,catalogSortBy,catalogSortOrder])

    return (
        <Main>
            {loading
            ?   <><h2 className='debug px-1 py-1 text-3xl font-bold'>Catalog</h2>
                <ul className='debug px-1 py-1 w-full h-max flex flex-wrap gap-2'>
                    <li className='debug'>
                        <GenreLink />
                    </li>
                    {/* {genres.map(element => <li key={element._id}>
                        <GenreLink genre={element._id} />
                    </li>)} */}
                </ul>
                <ul className='debug px-1 py-1 grow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
                    {catalog.map(element => <Card key={element._id} content={element} />)}
                </ul></>
            :   <Loader />}
        </Main>
    )
}
