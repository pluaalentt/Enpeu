import './Galeria.css'

function Galeria() {
  const imagenes = [
    {
      id: 1,
      titulo: 'Centro Cultural Medellín - Exterior',
      proyecto: 'Centro Cultural Medellín',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      titulo: 'Eco-Residencial Barcelona - Vista Aérea',
      proyecto: 'Eco-Residencial Barcelona',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      titulo: 'Biblioteca Nairobi - Interior',
      proyecto: 'Biblioteca Pública Nairobi',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      titulo: 'Torre São Paulo - Fachada',
      proyecto: 'Torre Corporativa São Paulo',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      titulo: 'Museo CDMX - Hall Principal',
      proyecto: 'Museo de Arte Contemporáneo',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      titulo: 'Campus Buenos Aires - Plaza Central',
      proyecto: 'Campus Universitario Sustentable',
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 7,
      titulo: 'Detalle Arquitectónico - Barcelona',
      proyecto: 'Eco-Residencial Barcelona',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 8,
      titulo: 'Espacio Público - Medellín',
      proyecto: 'Centro Cultural Medellín',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      id: 9,
      titulo: 'Biblioteca - Zona de Lectura',
      proyecto: 'Biblioteca Pública Nairobi',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
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
                <div 
                  className="galeria-image"
                  style={{background: imagen.color}}
                >
                  <div className="galeria-overlay">
                    <h3>{imagen.titulo}</h3>
                    <p>{imagen.proyecto}</p>
                  </div>
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
