import './Galeria.css'

function Galeria() {
  const imagenes = [
    {
      id: 1,
      titulo: 'Centro Cultural Medellín - Exterior',
      proyecto: 'Centro Cultural Medellín',
      imagen: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
    },
    {
      id: 2,
      titulo: 'Eco-Residencial Barcelona - Vista Aérea',
      proyecto: 'Eco-Residencial Barcelona',
      imagen: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    },
    {
      id: 3,
      titulo: 'Biblioteca Nairobi - Interior',
      proyecto: 'Biblioteca Pública Nairobi',
      imagen: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80'
    },
    {
      id: 4,
      titulo: 'Torre São Paulo - Fachada',
      proyecto: 'Torre Corporativa São Paulo',
      imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      id: 5,
      titulo: 'Museo CDMX - Hall Principal',
      proyecto: 'Museo de Arte Contemporáneo',
      imagen: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=80'
    },
    {
      id: 6,
      titulo: 'Campus Buenos Aires - Plaza Central',
      proyecto: 'Campus Universitario Sustentable',
      imagen: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80'
    },
    {
      id: 7,
      titulo: 'Detalle Arquitectónico - Barcelona',
      proyecto: 'Eco-Residencial Barcelona',
      imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    },
    {
      id: 8,
      titulo: 'Espacio Público - Medellín',
      proyecto: 'Centro Cultural Medellín',
      imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
    },
    {
      id: 9,
      titulo: 'Biblioteca - Zona de Lectura',
      proyecto: 'Biblioteca Pública Nairobi',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
    }
  ]

  return (
    <div className="galeria-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Galería de Proyectos</h1>
          <p className="page-subtitle">
            Explora las imágenes de nuestros proyectos arquitectónicos internacionales
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="galeria-grid">
            {imagenes.map(imagen => (
              <div key={imagen.id} className="galeria-item">
                <img 
                  src={imagen.imagen}
                  alt={imagen.titulo}
                  className="galeria-image"
                />
                <div className="galeria-overlay">
                  <h3>{imagen.titulo}</h3>
                  <p>{imagen.proyecto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-galeria">
        <div className="container">
          <h2>¿Quieres ver más?</h2>
          <p>Descarga nuestro portafolio completo o contáctanos para una presentación personalizada</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Descargar Portafolio</button>
            <a href="/contacto" className="btn">Contactar</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Galeria
