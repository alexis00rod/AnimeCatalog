import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCatalog } from '../service/fetch'

export const useCatalog = () => {
  const {page} = useParams()
  const [loading, setLoading] = useState(false)
  const [catalog, setCatalog] = useState([])
  const [catalogFilter, setCatalogFilter] = useState({
    title: "", genre: "All", by: "ranking", order: "asc"
  })

  useEffect(() => {
    getCatalog(catalogFilter,page)
      .then(resp => setCatalog(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(true))
  },[catalogFilter,page])

  return {loading, catalog, setCatalogFilter}
}
