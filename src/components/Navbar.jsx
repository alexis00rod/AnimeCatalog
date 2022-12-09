import { useState,useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

import logo from '../../public/favicon.ico'
import { SearchInput } from './SearchInput'

export const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header className="navbar">
            <nav className="navbar-container">
                <button className='navbar-btn md:hidden' onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
                </button> 
                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt="Anime Catalog Logo"/>
                    <h1>Anime Catalog</h1>
                </Link> 
                {window.innerWidth < 768
                ?   openMenu && <ul className='navbar-menu-mobile'>
                        {[['/','Home'],['/catalog',"Catalog"]].map((e,i) => <li key={i} className="px-1 py-1">
                            <NavLink to={`${e[0]}`} className={({isActive}) => isActive ? "navbar-menu-link-active" : "navbar-menu-link"} onClick={() => setOpenMenu(false)}>
                                {e[1]}
                            </NavLink>
                        </li>)}
                    </ul>
                :   <ul className='navbar-menu-screen'>
                        {[['/','Home'],['/catalog',"Catalog"]].map((e,i) => <li key={i} className="px-1 py-1">
                            <NavLink to={`${e[0]}`} className={({isActive}) => isActive ? "navbar-menu-link-active" : "navbar-menu-link"} onClick={() => setOpenMenu(false)}>
                                {e[1]}
                            </NavLink>
                        </li>)}
                    </ul>}
                <Link to='/search' className='navbar-btn'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
                {location.pathname !== "/" && <button className='navbar-btn' onClick={() => navigate('/')}><i className='fa-solid fa-arrow-left'></i></button>}
            </nav>
        </header>
    )
}
