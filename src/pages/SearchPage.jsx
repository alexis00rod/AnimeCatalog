import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Main, Card } from '../components/index'
import { getSearchAnime } from "../service/fetch"

export const SearchPage = () => {
    const [animeFind, setAnimeFind] = useState([])
    const [search, setSearch] = useState("")

    const searchAnime = e => {
        e.preventDefault()
        search !== "" && getSearchAnime(search).then(resp => setAnimeFind(resp))
    }

    return (
        <Main>
            <div className='px-1 py-1 flex items-center'>
                <Link to='/' className='text-xs hover:text-red-500'>Home</Link>
                <span className='mx-1'>/</span>
                <Link to='/search' className='text-xs hover:text-red-500'>Search</Link>
            </div>
            <div className="w-full mb-2 px-4 py-4 bg-zinc-300 rounded-lg">
                <form className="flex items-center bg-zinc-200 border border-zinc-100 rounded-lg" onSubmit={searchAnime}>
                    <input type="text" className="h-10 px-3 grow bg-transparent outline-none placeholder:text-zinc-800" onChange={({target:{value}}) => setSearch(value)} placeholder="Search anime" />
                    <button type="submit" className="w-10 h-10 flex items-center justify-center text-zinc-500 duration-300 hover:text-zinc-900"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div className='px-1 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                {animeFind.map(element => <Card key={element._id} content={element} />)}
            </div>
        </Main>
    )
}
