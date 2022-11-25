import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCatalogContext } from '../context/CatalogContext'
import { getSearchAnime } from '../service/getData'

export const SearchInput = () => {
    const [animeToSearch, setAnimeToSearch] = useState("")
    const {filter,setFilter} = useCatalogContext()
    const navigate = useNavigate()
    
    const handleSearch = ({target:{value}}) => {
        setAnimeToSearch(value)
        setFilter(value)
    }

    const sendAnimeToSearch = e => {
        e.preventDefault()
        navigate("/")
        // setFilter(animeToSearch)
    }

    return (
        <div className="w-2/5 relative px-4 py-1 flex-none flex flex-row items-center justify-end">
            <form className="w-full px-4 h-10 flex flex-row items-center rounded-lg bg-slate-600" onSubmit={sendAnimeToSearch}>
                <input type="text" name="text" className="grow bg-transparent outline-0" placeholder="Search anime..." value={filter} onChange={handleSearch}/>
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
    // <li key={anime._id}>{anime.title}</li>
}
