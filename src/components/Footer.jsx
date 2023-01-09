import { Link } from 'react-router-dom'
import logo from '../../public/favicon.ico'

export const Footer = () => {
  return (
    <footer className='w-full px-2 py-2 bg-zinc-900'>
      <div className='w-full max-w-screen-xl mx-auto px-2 py-2 flex items-center justify-between flex-wrap gap-2'>
        <Link to='/' className='logo logo-xs'>
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h2>Anime Catalog</h2>
        </Link>
        <div className='w-max px-2 py-2'>
          <p className='w-full text-sm text-zinc-300'>Build by <a href="https://github.com/alexis00rod" target="_blank" className='hover:underline'>Alexis Ruiz Diaz</a></p>
        </div>
      </div>
    </footer>
  )
}
