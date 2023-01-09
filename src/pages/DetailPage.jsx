import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader, Main } from '../components/index'
import { getDetail } from '../service/fetch'

export const DetailPage = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [detail, setDetail] = useState({})

  useEffect(() => {
    getDetail(id)
    .then(resp => setDetail(resp))
    .finally(() => setLoading(true))
  },[id])

  if(!loading) return <Loader />
  
  return (
    <Main>
      {loading && <>
        <div className='w-full my-2 flex flex-col md:flex-row rounded-lg overflow-hidden'>
          <div className='px-4 py-4 flex md:flex-col flex-none gap-2 bg-zinc-700 '>
            <img src={detail.image} alt={detail.title} className="w-20 h-28 md:w-32 md:h-48 lg:w-48 lg:h-72 rounded-lg object-cover" />
            <div className='px-1 py-1 flex flex-col'>
                <span className='text-sm text-zinc-300'>Type:</span>
                <span className='font-medium'>{detail.type}</span>
            </div>
            <div className='px-1 py-1 flex flex-col'>
                <span className='text-sm text-zinc-300'>Episodes:</span>
                <span className='font-medium'>{detail.episodes}</span>
            </div>
            <div className='px-1 py-1 flex flex-col'>
                <span className='text-sm text-zinc-300'>Status:</span>
                <span className='font-medium'>{detail.status}</span>
            </div>
          </div>
          <div className='px-4 py-4 flex flex-col gap-2 grow bg-zinc-700/50'>
            <h2 className='px-1 py-1 text-3xl font-semibold'>{detail.title}</h2>
            <p className='w-full px-1 py-1'>{detail.synopsis}</p>
            <div className='flex justify-end gap-4'>
                <a href={detail.link} target="_blank" className='btn btn-primary'>
                    <i className='fa-solid fa-eye'></i>
                    MyAnimeList
                </a>
                <span className='h-9 px-2 flex items-center justify-center bg-yellow-500 text-zinc-100 rounded-lg'>
                    <i className='fa-solid fa-star'></i>
                    {detail.ranking}
                </span>
            </div>
          </div>
        </div>
      </>}
    </Main>
  )
}
