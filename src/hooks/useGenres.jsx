import { useState, useEffect } from 'react'
import { getGenres } from '../service/fetch'

export const useGenres = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    getGenres()
    .then(resp => setGenres(resp))
  },[])

  return {genres}
}
