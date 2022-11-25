import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAnimeDetail } from "../service/getData"
import logo from '../../public/favicon.ico'

export const Detail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAnimeDetail(id)
        .then(resp => setDetail(resp))
        .finally(() => setLoading(true))
    },[id])
    
    return (
        <div className="w-full h-screen px-2 py-6 flex flex-row items-start justify-center bg-slate-200">
            {
                loading ?
                <div className="mx-auto px-4 py-4 container flex flex-row gap-2 bg-slate-100 rounded-lg shadow-md">
                    <div className="mx-1 my-1 px-2 py-1 w-1/5 flex-none">
                        <img src={detail.image} alt={detail.title} className="rounded-sm w-full h-max flex-none" />
                    </div>
                    <div className="mx-1 my-1 px-2 py-1 grow">
                        <div className="flex flex-row items-center gap-2">
                            <h3 className="mb-1 px-3 py-2 grow text-3xl font-semibold border-b-2 border-b-slate-200">{detail.title}</h3>
                            <button className="mx-1 w-10 h-10 flex-none flex flex-row items-center justify-center bg-slate-200 text-black rounded-full duration-300 hover:bg-slate-300" onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left"></i></button>
                        </div>
                        <div className="mb-1 px-3 py-2">
                            <p className="px-1 py-1">{detail.synopsis}</p>
                        </div>
                        <div className="px-3 py-2 flex flex-col items-start">
                            <ul className="mb-3 px-1 py-1 flex flex-col list-disc list-inside">
                                <li className="font-medium">Type:<span className="pl-2 text-teal-500 duration-300 hover:text-teal-600">{detail.type}</span></li>
                                <li className="font-medium">Genre:{detail.genres.map(e => <span key={e} className="pl-2 text-teal-500 duration-300 hover:text-teal-600">{e}</span>)}</li>
                                <li className="font-medium">Episodes:<span className="pl-2 text-teal-500 duration-300 hover:text-teal-600">{detail.episodes}</span></li>
                                <li className="font-medium">Status:<span className="pl-2 text-teal-500 duration-300 hover:text-teal-600">{detail.status}</span></li>
                            </ul>
                            <a href={detail.link} target="_blank" className="ml-1 px-4 py-2 text-white bg-red-500 rounded duration-300 hover:bg-red-600">Show more</a>
                        </div>
                    </div>
                </div>
                :
                <>
                <div className="mx-auto px-4 py-4 container h-1/2 flex flex-row items-center justify-center">
                    <img src={logo} alt="logo" className="w-12 h-12 animate-spin" />
                </div>
                </>
            }
            {/* <div className="px-2 py-2 w-1/2 h-max bg-white rounded-lg">
                <div className="px-2 py-2 w-full flex flex-row items-center gap-4">
                    <h3 className="px-3 py-2 grow text-2xl font-semibold border-b-2 border-b-slate-200">{detail.title}</h3>
                </div>
                <div className="mb-4 px-3 py-2 flex flex-row gap-4">
                    <div className="px-2 py-1 w-48 flex-none">
                        <img src={detail.image} alt={detail.title} className="rounded-sm w-full h-max" />
                    </div>
                    <div className="px-2 py-1 grow flex flex-col items-start gap-2">
                        <p className="px-1 py-1">{detail.synopsis}</p>
                        <ul className="px-1 py-1 flex flex-col list-disc list-inside">
                            <li className="font-medium">Type: <span className="px-2 text-teal-500 duration-300 hover:text-teal-600">{detail.type}</span></li>
                            <li className="font-medium">Genre: <span className="px-2 text-teal-500 duration-300 hover:text-teal-600">{detail.genres.join(", ")}</span></li>
                            <li className="font-medium">Episodes: <span className="px-2 text-teal-500 duration-300 hover:text-teal-600">{detail.episodes}</span></li>
                            <li className="font-medium">Status: <span className="px-2 text-teal-500 duration-300 hover:text-teal-600">{detail.status}</span></li>
                        </ul>
                        <a href={detail.link} target="_blank" className="px-4 py-2 text-white bg-red-500 rounded duration-300 hover:bg-red-600">See more</a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
