import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/logo-enpeu.png" alt="Enpeu" className="logo-image" />
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/proyectos" className="nav-link">Proyectos</Link>
            <Link to="/galeria" className="nav-link">Galería</Link>
            <Link to="/colaboraciones" className="nav-link">Colaboraciones</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
