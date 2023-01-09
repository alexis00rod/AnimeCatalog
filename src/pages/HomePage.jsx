import { useParams } from "react-router-dom"
import { Loader, Main, Pagination, Catalog } from '../components/index'
import { useCatalog } from '../hooks/useCatalog'
import { useGenres } from "../hooks/useGenres"

export const HomePage = () => {
  const {page} = useParams()
  const {genres} = useGenres()
  const {loading, catalog} = useCatalog()

  if(!loading) return <Loader />

  return (
    <Main>
      {/* Filter */}
      <form className='w-full my-2 px-4 py-4 flex flex-col gap-4 items-center bg-zinc-700 rounded-lg'>
        <input type="text" name="title" id="title" className='input-text' placeholder='Enter name anime...'/>
        <div className="w-full flex flex-wrap gap-2">
          <div className='select'>
            <label htmlFor="genre">Genre</label>
            <select name="genre" id="genre">
              <option value="All">All</option>
              {genres.map(e => <option value={e._id}>{e._id}</option>)}
            </select>
          </div>
          <div className='select'>
            <label htmlFor="by">Sort by</label>
            <select name="by" id="by">
              <option value="ranking">Ranking</option>
              <option value="title">Title</option>
            </select>
          </div>
          <div className='select'>
            <label htmlFor="order">Sort order</label>
            <select name="order" id="order">
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
        </div>
        <button className="btn btn-form">Search</button>
      </form>
  
      {/* Catalog */}
      {/* <Catalog catalog={catalog.data} /> */}
  
      {/* Pagination */}
      {/* <Pagination totalPage={catalog.meta.totalPage} page={page} /> */}
    </Main>
  )
}