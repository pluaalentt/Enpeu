import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import Galeria from './pages/Galeria'
import Colaboraciones from './pages/Colaboraciones'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/colaboraciones" element={<Colaboraciones />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
