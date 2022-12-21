import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import { Main,Card,Loader } from '../components/index'
import { getCatalog, getGenres } from '../service/fetch'

export const CatalogPage = () => {
    const [loading, setLoading] = useState(false)
    const [catalog, setCatalog] = useState([])
    const [genres, setGenres] = useState(null)
    const [catalogPage, setCatalogPage] = useState(1)
    const [catalogGenre, setCatalogGenre] = useState("All")
    const [catalogSortBy, setCatalogSortBy] = useState("ranking")
    const [catalogSortOrder, setCatalogSortOrder] = useState("asc")

    useEffect(() => {
        getGenres()
        .then(resp => setGenres(resp))
    },[])
    
    useEffect(() => {
        getCatalog(catalogPage,catalogGenre,catalogSortBy,catalogSortOrder)
        .then(resp => setCatalog(resp))
        .then(() => window.scrollTo(0,0))
        .finally(() => setLoading(true))
    },[catalogPage,catalogGenre,catalogSortBy,catalogSortOrder])

    return (
        <Main>
            {!loading && <Loader />}
            {loading && <>
                <div className='px-1 py-1 flex items-center'>
                    <Link to='/' className='text-xs hover:text-red-500'>Home</Link>
                    <span className='mx-1'>/</span>
                    <Link to='/catalog' className='text-xs hover:text-red-500'>Catalog</Link>
                </div>
                <div className='w-full px-4 py-4 mb-2 flex flex-wrap gap-4 bg-zinc-300 rounded-lg'>
                    <div className='select'>
                        <label htmlFor="genre">Genre</label>
                        <select name="" id="" defaultValue={catalogGenre} onChange={({target:{value}}) => setCatalogGenre(value)}>
                            <option value="All">All</option>
                            {genres.map(e => <option value={e._id}>{e._id}</option>)}
                        </select>
                    </div>
                    <div className='select'>
                        <label htmlFor="by">Sort by</label>
                        <select id="by"  defaultValue={catalogSortBy} onChange={({target:{value}}) => setCatalogSortBy(value)}>
                            <option value="ranking">Ranking</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                    <div className='select'>
                        <label htmlFor="order">Sort order</label>
                        <select id="order"  defaultValue={catalogSortOrder} onChange={({target:{value}}) => setCatalogSortOrder(value)}>
                            <option value="asc">Asc</option>
                            <option value="desc">Desc</option>
                        </select>
                    </div>
                </div>
                <div className='px-1 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                    {catalog.map(element => <Card key={element._id} content={element} />)}
                </div>
                <div className='px-1 py-1 w-full flex justify-center gap-4'>
                    {catalogPage > 1 && <button className='w-10 h-10 flex items-center justify-center bg-red-500 text-zinc-100 rounded-lg duration-300 hover:bg-red-600' onClick={() => {setCatalogPage(catalogPage - 1)}} ><i className='fa-solid fa-chevron-left'></i></button>}
                    <button className='w-10 h-10 flex items-center justify-center bg-red-500 text-zinc-100 rounded-lg duration-300 hover:bg-red-600' onClick={() => {setCatalogPage(catalogPage + 1)}} ><i className='fa-solid fa-chevron-right'></i></button>
                </div>
            </>}
        </Main>
    )
}
