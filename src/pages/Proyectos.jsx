import { useState } from 'react'
import './Proyectos.css'

function Proyectos() {
  const [filter, setFilter] = useState('todos')

  const proyectos = [
    {
      id: 1,
      titulo: 'Centro Cultural Medellín',
      ubicacion: 'Medellín, Colombia',
      año: 2023,
      categoria: 'cultural',
      descripcion: 'Espacio comunitario integrado que combina arte, educación y sostenibilidad. Certificación LEED Gold.',
      imagen: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
    },
    {
      id: 2,
      titulo: 'Eco-Residencial Barcelona',
      ubicacion: 'Barcelona, España',
      año: 2023,
      categoria: 'residencial',
      descripcion: 'Complejo habitacional con 120 unidades, certificación LEED Platino, paneles solares y sistemas de reciclaje de agua.',
      imagen: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    },
    {
      id: 3,
      titulo: 'Biblioteca Pública Nairobi',
      ubicacion: 'Nairobi, Kenia',
      año: 2022,
      categoria: 'educacional',
      descripcion: 'Centro de conocimiento con tecnología de punta, espacios colaborativos y diseño bioclimático.',
      imagen: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80'
    },
    {
      id: 4,
      titulo: 'Torre Corporativa São Paulo',
      ubicacion: 'São Paulo, Brasil',
      año: 2024,
      categoria: 'comercial',
      descripcion: 'Edificio de oficinas de 30 pisos con fachada inteligente y espacios verdes en cada nivel.',
      imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      id: 5,
      titulo: 'Museo de Arte Contemporáneo',
      ubicacion: 'Ciudad de México, México',
      año: 2022,
      categoria: 'cultural',
      descripcion: 'Espacio museístico con arquitectura vanguardista y salas de exposición modulares.',
      imagen: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80'
    },
    {
      id: 6,
      titulo: 'Campus Universitario Sustentable',
      ubicacion: 'Buenos Aires, Argentina',
      año: 2023,
      categoria: 'educacional',
      descripcion: 'Complejo educativo con laboratorios, aulas interactivas y áreas verdes comunitarias.',
      imagen: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80'
    }
  ]

  const categorias = [
    { id: 'todos', nombre: 'Todos los Proyectos' },
    { id: 'residencial', nombre: 'Residencial' },
    { id: 'comercial', nombre: 'Comercial' },
    { id: 'cultural', nombre: 'Cultural' },
    { id: 'educacional', nombre: 'Educacional' }
  ]

  const proyectosFiltrados = filter === 'todos' 
    ? proyectos 
    : proyectos.filter(p => p.categoria === filter)

  return (
    <div className="proyectos-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Nuestros Proyectos</h1>
          <p className="page-subtitle">
            Explora nuestra cartera de proyectos arquitectónicos innovadores y sostenibles alrededor del mundo
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="filter-section">
            <h3>Filtrar por categoría:</h3>
            <div className="filter-buttons">
              {categorias.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-2">
            {proyectosFiltrados.map(proyecto => (
              <div key={proyecto.id} className="card proyecto-card">
                <img 
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="card-image"
                />
                <div className="card-content">
                  <span className="proyecto-categoria-tag">{proyecto.categoria}</span>
                  <h3 className="card-title">{proyecto.titulo}</h3>
                  <div className="proyecto-meta">
                    <span className="proyecto-location">📍 {proyecto.ubicacion}</span>
                    <span className="proyecto-year">📅 {proyecto.año}</span>
                  </div>
                  <p className="card-text">{proyecto.descripcion}</p>
                  <button className="btn">Ver Detalles</button>
                </div>
              </div>
            ))}
          </div>

          {proyectosFiltrados.length === 0 && (
            <div className="no-results">
              <p>No hay proyectos en esta categoría</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Proyectos
