import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loader, Main } from '../components/index'
import { getDetail } from '../service/fetch'

export const DetailPage = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getDetail(id)
        .then(resp => setDetail(resp))
        .finally(() => setLoading(true))
    },[id])

    console.log(detail)

    return (
        <Main>
            {!loading &&  <Loader />}
            {loading && <>
                <div className='px-1 py-1 flex items-center'>
                    <Link to='/' className='text-xs hover:text-red-500'>Home</Link>
                    <span className='mx-1'>/</span>
                    <Link to='/catalog' className='text-xs hover:text-red-500'>Catalog</Link>
                    <span className='mx-1'>/</span>
                    <Link to={`/${detail._id}`} className='text-xs hover:text-red-500'>{detail.title}</Link>
                </div>
                <div className='w-full flex flex-col md:flex-row rounded-lg overflow-hidden'>
                    <div className='px-4 py-4 flex md:flex-col flex-none gap-2 bg-zinc-300 '>
                        <img src={detail.image} alt={detail.title} className="w-20 h-28 md:w-32 md:h-48 lg:w-48 lg:h-72 rounded-lg object-cover" />
                        <div className='px-1 py-1 flex flex-col'>
                            <span className='text-sm text-zinc-500'>Type:</span>
                            <span className='font-medium'>{detail.type}</span>
                        </div>
                        <div className='px-1 py-1 flex flex-col'>
                            <span className='text-sm text-zinc-500'>Episodes:</span>
                            <span className='font-medium'>{detail.episodes}</span>
                        </div>
                        <div className='px-1 py-1 flex flex-col'>
                            <span className='text-sm text-zinc-500'>Status:</span>
                            <span className='font-medium'>{detail.status}</span>
                        </div>
                    </div>
                    <div className='px-4 py-4 flex flex-col gap-2 grow bg-zinc-300/50'>
                        <h2 className='px-1 py-1 text-3xl font-semibold'>{detail.title}</h2>
                        <p className='w-full px-1 py-1'>{detail.synopsis}</p>
                        <div className='flex justify-end gap-4'>
                            <a href={detail.link} target="_blank" className='w-max h-10 px-3 flex items-center gap-2 bg-red-500 text-zinc-100 rounded-lg duration-300 hover:bg-red-600'>
                                <i className='fa-solid fa-eye'></i>
                                MyAnimeList
                            </a>
                            <span className='w-10 h-10 flex items-center justify-center bg-yellow-500 text-zinc-100 rounded-lg'>
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
