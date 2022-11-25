import { Link } from 'react-router-dom'
import logo from '../../public/favicon.ico'

export const Footer = () => {
    return (
        <footer className='bg-slate-900 text-white flex flex-col items-center'>
            <div className='my-3 mx-auto px-2 py-2 container flex flex-row items-center'>
                <Link to='/' className='pl-2 pr-4 py-1 w-max flex flex-row items-center gap-2'>
                    <img src={logo} alt="logo" className="w-8 h-8" />
                    <h1 className="text-xl">Anime Catalog</h1>
                </Link>
                <div className='px-2 py-1 flex flex-row items-center justify-center grow'>
                    <p className='px-2 py-1 w-max text-slate-400'>Build by <a href="https://github.com/alexis00rod" target="_blank">Alexis Ruiz Diaz</a></p>
                </div>
            </div>
        </footer>
    )
}
