import { useEffect} from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Navbar, Footer } from './index'

export const App = () => {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    },[pathname])

    return <section className="w-full flex flex-col gap-4 bg-slate-200 font-raleway">
                <div className="debug min-h-screen flex flex-col grow">
                    <Navbar />
                    <Outlet />
                </div>
                <Footer />
            </section>
}

