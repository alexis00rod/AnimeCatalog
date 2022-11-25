import { Link, NavLink } from 'react-router-dom'

import logo from '../../public/favicon.ico'
import { SearchInput } from './SearchInput'

export const Navbar = () => {
    return (
        <header className="sticky top-0 left-0 z-20 w-full h-max px-2 py-2 bg-slate-900 text-white">
            <nav className="px-1 py-1 container mx-auto flex flex-row items-center gap-4">
                <Link to='/' className='px-1 py-1 flex flex-row items-center gap-2'>
                    <img src={logo} alt="logo" className="w-10 h-10" />
                    <h1 className="text-3xl">Anime Catalog</h1>
                </Link>
                <div className='grow flex flex-row items-center justify-end'>
                    <SearchInput />            
                </div>
            </nav>
        </header>
    )
}
