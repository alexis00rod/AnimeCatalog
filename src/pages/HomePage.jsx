import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Loader, Main, Pagination, Catalog } from '../components/index'
import { useCatalog } from '../hooks/useCatalog'
import { useGenres } from "../hooks/useGenres"

export const HomePage = () => {
  const {page} = useParams()
  const {genres} = useGenres()
  const {loading, catalog, setCatalogFilter} = useCatalog()
  const [formFilter, setFormFilter] = useState({
    title: "",genre: "All", by: "ranking", order: "asc"
  })
  const navigate = useNavigate()

  const handleFilter = ({target:{name,value}}) => {
    setFormFilter({...formFilter,[name]:value})
  }

  const filterCatalog = e => {
    e.preventDefault()
    setCatalogFilter(formFilter)
    navigate('/')
  }

  if(!loading) return <Loader />

  return (
    <Main>
      {/* Filter */}
      <form className='w-full my-2 px-4 py-4 flex flex-col gap-4 items-center bg-zinc-700/50 rounded-lg' onSubmit={filterCatalog}>
        <input type="text" name="title" id="title" className='input-text' placeholder='Enter name anime...' onChange={handleFilter}/>
        <div className="w-full flex flex-wrap gap-2">
          <div className='select'>
            <label htmlFor="genre">Genre</label>
            <select name="genre" id="genre" onChange={handleFilter}>
              <option value="All">All</option>
              {genres.map(e => <option value={e._id} key={e._id}>{e._id}</option>)}
            </select>
          </div>
          <div className='select'>
            <label htmlFor="by">Sort by</label>
            <select name="by" id="by" onChange={handleFilter}>
              <option value="ranking">Ranking</option>
              <option value="title">Title</option>
            </select>
          </div>
          <div className='select'>
            <label htmlFor="order">Sort order</label>
            <select name="order" id="order" onChange={handleFilter}>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
        </div>
        <button type='submit' className="btn btn-form">Search</button>
      </form>
  
      {/* Catalog */}
      <Catalog catalog={catalog.data} />
  
      {/* Pagination */}
      <Pagination totalPage={catalog.meta.totalPage} page={page} />
    </Main>
  )
}