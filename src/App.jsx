import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { useCatalogContext } from "./context/CatalogContext"
import logo from '../public/favicon.ico'

export const App = () => {
    const {catalog,loading} = useCatalogContext()
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    },[location])

    return (
        <>
        {
            loading ?
            <>
            <Navbar />
            <Outlet />
            <Footer />
            </>
            :
            <div className="bg-slate-900 w-full h-screen flex flex-row items-center justify-center gap-2">
                <img src={logo} alt="Logo" className="w-12 h-12 animate-spin" />
                <p className="text-4xl text-white">Loading...</p>
            </div>
        }
        </>
    )
}

