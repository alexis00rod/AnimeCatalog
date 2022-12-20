import { Link } from 'react-router-dom'
import logo from '../../public/favicon.ico'

export const Footer = () => {
    return (
        <footer className='bg-zinc-900 text-white flex flex-col items-center'>
            <div className='w-full max-w-screen-xl my-3 mx-auto px-2 py-2 flex'>
                <Link to='/' className='pl-2 pr-4 py-1 w-max flex items-center flex-none gap-2'>
                    <img src={logo} alt="logo" className="w-8 h-8" />
                    <h1 className="text-xl">Anime Catalog</h1>
                </Link>
            </div>
            <div className='w-full px-2 py-1 flex flex-row items-center justify-center grow bg-zinc-800'>
                <p className='px-2 py-1 w-max text-zinc-200'>Build by <a href="https://github.com/alexis00rod" target="_blank">Alexis Ruiz Diaz</a></p>
            </div>
        </footer>
    )
}
