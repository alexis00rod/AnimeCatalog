import { useEffect} from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Navbar, Footer } from './index'

export const App = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  },[pathname])

  return (
    <section className="app">
      <div className="app-container">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}

