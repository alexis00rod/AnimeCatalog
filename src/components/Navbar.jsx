import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../public/favicon.ico'

export const Navbar = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className='grow'>
          <Link to='/' className='logo'>
            <img src={logo} alt="Anime Catalog Logo"/>
            <h1>Anime Catalog</h1>
          </Link>
        </div>
        {pathname !== "/" && <button className='btn btn-toggle' onClick={() => navigate('/')}><i className='fa-solid fa-arrow-left'></i></button>}
      </nav>
    </header>
  )
}
