import './Colaboraciones.css'

function Colaboraciones() {
  const colaboraciones = [
    {
      id: 1,
      organizacion: 'UNESCO',
      tipo: 'Organización Internacional',
      descripcion: 'Colaboración en proyectos de patrimonio arquitectónico y desarrollo sostenible en comunidades vulnerables.',
      proyectos: ['Restauración Centro Histórico Lima', 'Centro Cultural Cartagena'],
      año: '2020 - Presente'
    },
    {
      id: 2,
      organizacion: 'Universidad Politécnica de Barcelona',
      tipo: 'Institución Educativa',
      descripcion: 'Programa de investigación conjunta en arquitectura sostenible y nuevos materiales de construcción.',
      proyectos: ['Lab de Materiales Sostenibles', 'Programa de Intercambio'],
      año: '2019 - Presente'
    },
    {
      id: 3,
      organizacion: 'Green Building Council',
      tipo: 'ONG Ambiental',
      descripcion: 'Certificación y desarrollo de edificios sustentables bajo estándares LEED y BREEAM.',
      proyectos: ['Eco-Residencial Barcelona', 'Torre Corporativa São Paulo'],
      año: '2018 - Presente'
    },
    {
      id: 4,
      organizacion: 'Fundación Rogelio Salmona',
      tipo: 'Fundación Cultural',
      descripcion: 'Promoción de la arquitectura latinoamericana y preservación del legado arquitectónico.',
      proyectos: ['Centro Cultural Medellín', 'Museo Bogotá'],
      año: '2021 - Presente'
    },
    {
      id: 5,
      organizacion: 'Arquitectos Sin Fronteras',
      tipo: 'ONG Humanitaria',
      descripcion: 'Proyectos de arquitectura de emergencia y reconstrucción en zonas de desastre.',
      proyectos: ['Viviendas Ecuador', 'Escuelas Haití'],
      año: '2017 - Presente'
    },
    {
      id: 6,
      organizacion: 'Smart Cities Network',
      tipo: 'Red de Innovación',
      descripcion: 'Desarrollo de soluciones arquitectónicas para ciudades inteligentes y conectadas.',
      proyectos: ['Smart Campus Buenos Aires', 'Distrito Digital Barcelona'],
      año: '2022 - Presente'
    }
  ]

  const socios = [
    {
      id: 1,
      nombre: 'Estudio Carme Pinós',
      pais: 'España',
      especialidad: 'Arquitectura Vanguardista'
    },
    {
      id: 2,
      nombre: 'Elemental (Alejandro Aravena)',
      pais: 'Chile',
      especialidad: 'Vivienda Social'
    },
    {
      id: 3,
      nombre: 'Adjaye Associates',
      pais: 'Reino Unido / Ghana',
      especialidad: 'Diseño Cultural'
    },
    {
      id: 4,
      nombre: 'TAO Architecture',
      pais: 'China',
      especialidad: 'Arquitectura Contextual'
    },
    {
      id: 5,
      nombre: 'Urban Think Tank',
      pais: 'Venezuela / Suiza',
      especialidad: 'Urbanismo Social'
    },
    {
      id: 6,
      nombre: 'Mass Design Group',
      pais: 'Estados Unidos',
      especialidad: 'Diseño Inclusivo'
    }
  ]

  return (
    <div className="colaboraciones-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Colaboraciones</h1>
          <p className="page-subtitle">
            Trabajamos con organizaciones y estudios de arquitectura líderes a nivel mundial
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Organizaciones Aliadas</h2>
          <p className="section-subtitle">
            Nuestras colaboraciones estratégicas nos permiten ampliar el impacto de nuestros proyectos
          </p>
          <div className="grid grid-2">
            {colaboraciones.map(colab => (
              <div key={colab.id} className="card colaboracion-card">
                <div className="card-content">
                  <div className="colaboracion-header">
                    <h3 className="card-title">{colab.organizacion}</h3>
                    <span className="colaboracion-tipo">{colab.tipo}</span>
                  </div>
                  <p className="card-text">{colab.descripcion}</p>
                  <div className="colaboracion-proyectos">
                    <strong>Proyectos destacados:</strong>
                    <ul>
                      {colab.proyectos.map((proyecto, index) => (
                        <li key={index}>{proyecto}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="colaboracion-footer">
                    <span className="colaboracion-year">📅 {colab.año}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section socios-section">
        <div className="container">
          <h2 className="section-title">Estudios Asociados</h2>
          <p className="section-subtitle">
            Red global de arquitectos colaboradores
          </p>
          <div className="grid grid-3">
            {socios.map(socio => (
              <div key={socio.id} className="socio-card">
                <div className="socio-icon">🏛️</div>
                <h3>{socio.nombre}</h3>
                <p className="socio-pais">📍 {socio.pais}</p>
                <p className="socio-especialidad">{socio.especialidad}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>¿Interesado en colaborar?</h2>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
            Estamos siempre abiertos a nuevas alianzas y colaboraciones estratégicas
          </p>
          <a href="/contacto" className="btn" style={{backgroundColor: 'white', color: 'var(--primary-color)'}}>
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  )
}

export default Colaboraciones
