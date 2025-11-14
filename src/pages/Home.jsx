import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80" 
            alt="Arquitectura moderna"
            className="hero-background"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Diseñando el Futuro de la Arquitectura</h1>
            <p className="hero-subtitle">
              Cooperativa internacional comprometida con la excelencia arquitectónica, 
              la sostenibilidad y la innovación en cada proyecto.
            </p>
            <div className="hero-buttons">
              <a href="/proyectos" className="btn btn-primary">Ver Proyectos</a>
              <a href="/contacto" className="btn btn-outline">Contáctanos</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">Sobre ENPEU</h2>
          <p className="section-subtitle">
            Somos una cooperativa internacional de arquitectos apasionados por crear 
            espacios que transformen comunidades y respeten el medio ambiente.
          </p>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global</h3>
              <p>Proyectos en más de 30 países en 5 continentes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Sostenible</h3>
              <p>Comprometidos con la arquitectura verde y energías renovables</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Colaborativo</h3>
              <p>Trabajo en equipo con arquitectos de todo el mundo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-section">
        <div className="container">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Descubre algunos de nuestros proyectos más emblemáticos
          </p>
          <div className="grid grid-3">
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" 
                alt="Centro Cultural Medellín"
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Centro Cultural Medellín</h3>
                <p className="card-text">
                  Espacio comunitario integrado que combina arte, educación y sostenibilidad.
                </p>
                <a href="/proyectos" className="btn">Ver más</a>
              </div>
            </div>
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" 
                alt="Eco-Residencial Barcelona"
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Eco-Residencial Barcelona</h3>
                <p className="card-text">
                  Complejo habitacional con certificación LEED Platino y energía solar.
                </p>
                <a href="/proyectos" className="btn">Ver más</a>
              </div>
            </div>
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80" 
                alt="Biblioteca Nairobi"
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Biblioteca Nairobi</h3>
                <p className="card-text">
                  Diseño innovador que integra tecnología y espacios de aprendizaje.
                </p>
                <a href="/proyectos" className="btn">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="grid grid-3">
            <div className="stat-card">
              <h3 className="stat-number">150+</h3>
              <p className="stat-label">Proyectos Completados</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">35</h3>
              <p className="stat-label">Países</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">200+</h3>
              <p className="stat-label">Arquitectos Colaboradores</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>¿Listo para comenzar tu proyecto?</h2>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
            Contáctanos hoy y descubre cómo podemos ayudarte a hacer realidad tu visión arquitectónica.
          </p>
          <a href="/contacto" className="btn" style={{backgroundColor: 'white', color: 'var(--primary-color)'}}>
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
