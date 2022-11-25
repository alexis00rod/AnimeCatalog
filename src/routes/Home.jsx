import { Card } from "../components/Card"
import { useCatalogContext } from "../context/CatalogContext"

export const Home = () => {
    const {catalog,catalogSize, setCatalogSize,rankingAnime,genres,filter,setFilter} = useCatalogContext()

    return (
        <div className="flex flex-col w-full min-h-screen bg-slate-200">
            {/* <div className="w-full py-6 bg-slate-300">
                <div className="container mx-auto">
                    <div className="mb-2 px-2 py-3">
                        <h2 className="px-3 text-2xl font-bold uppercase border-l-8 border-red-500">Top animes</h2>
                    </div>
                    <div className="debug mb-2 px-1 py-1 flex flex-row items-center">
                        <button className="mx-2 w-10 h-10 flex flex-row items-center justify-center flex-none bg-red-500 text-white text-white rounded-lg duration-300 hover:bg-red-600"><i className="fa-solid fa-arrow-left"></i></button>
                        <div className="debug px-2 py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {rankingAnime.map(element => <Card key={element._id} content={element} />)}
                        </div>
                        <button className="mx-2 w-10 h-10 flex flex-row items-center justify-center flex-none bg-red-500 text-white text-white rounded-lg duration-300 hover:bg-red-600"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div> */}
            <div className="container mx-auto py-6 flex flex-row gap-8">
                <div className="px-1 py-1 grow flex flex-col gap-2">
                    <div className="mb-2 px-2 py-3 flex flex-row items-centergap-2">
                        <h2 className="px-3 flex flex-row items-center grow text-2xl font-bold uppercase border-l-8 border-red-500">{filter ? `Results for ${filter}` : "Full list animes"}</h2>
                        {filter && 
                        <button className="px-4 py-2 flex flex-row items-center gap-2 text-white bg-red-500 rounded duration-300 hover:bg-red-600" onClick={() => setFilter("")}>
                            <span>Clear</span>
                            <i className="fa-solid fa-trash"></i>
                        </button>}
                    </div>
                    <div className="px-2 py-1">
                        <div className="w-full mb-4 py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {catalog.map(element => <Card key={element._id} content={element} />)}
                        </div>
                        <div className="w-full py-1 flex flex-row items-center justify-center gap-4">
                            {catalogSize > 15 && <button className="px-4 py-2 text-white bg-red-500 rounded duration-300 hover:bg-red-600" onClick={() => setCatalogSize(catalogSize-10)}>Show less</button>}
                            <button className="px-4 py-2 text-white bg-red-500 rounded duration-300 hover:bg-red-600" onClick={() => setCatalogSize(catalogSize+10)}>Show more</button>
                        </div>
                    </div>
                </div>
                {/* <div className="px-2 py-1 w-1/4 h-max flex-none flex flex-col gap-2 bg-slate-100 rounded-lg shadow-md">
                    <div className="mb-2 px-2 py-3">
                        <h2 className="px-3 text-2xl font-bold uppercase border-l-8 border-red-500">Genres</h2>
                    </div>
                    <div className="mb-2 px-2 py-1">
                        <ul className="flex flex-col">
                            {genres.map(genre => <li key={genre._id} className="w-max px-2 py-1 flex flex-row items-center gap-2 text-black text-sm cursor-pointer hover:text-red-500">
                                <i className="fa-sharp fa-solid fa-circle-chevron-right text-red-500"></i>
                                <NavLink to={genre._id.toLowerCase().replace(" ","-")}>{genre._id}</NavLink>
                            </li>)}
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
