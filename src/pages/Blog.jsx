import './Blog.css'

function Blog() {
  const posts = [
    {
      id: 1,
      titulo: 'El Futuro de la Arquitectura Sostenible',
      fecha: '15 de Octubre, 2024',
      autor: 'María González',
      categoria: 'Sostenibilidad',
      extracto: 'Exploramos las tendencias emergentes en arquitectura verde y cómo están transformando el diseño urbano contemporáneo.',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tiempo: '5 min lectura'
    },
    {
      id: 2,
      titulo: 'Diseño Bioclimático en América Latina',
      fecha: '8 de Octubre, 2024',
      autor: 'Carlos Mendoza',
      categoria: 'Diseño',
      extracto: 'Cómo adaptar principios bioclimáticos a las condiciones específicas del clima tropical y subtropical latinoamericano.',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tiempo: '7 min lectura'
    },
    {
      id: 3,
      titulo: 'Tecnología BIM: Revolucionando la Colaboración',
      fecha: '1 de Octubre, 2024',
      autor: 'Ana Martínez',
      categoria: 'Tecnología',
      extracto: 'La metodología BIM está cambiando la forma en que los equipos internacionales colaboran en proyectos arquitectónicos complejos.',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tiempo: '6 min lectura'
    },
    {
      id: 4,
      titulo: 'Materiales Innovadores en la Construcción',
      fecha: '24 de Septiembre, 2024',
      autor: 'Pedro Silva',
      categoria: 'Innovación',
      extracto: 'Descubre los nuevos materiales ecológicos que están revolucionando la industria de la construcción.',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      tiempo: '8 min lectura'
    },
    {
      id: 5,
      titulo: 'Arquitectura y Comunidad: Diseño Participativo',
      fecha: '17 de Septiembre, 2024',
      autor: 'Laura Rodríguez',
      categoria: 'Social',
      extracto: 'La importancia de involucrar a las comunidades en el proceso de diseño arquitectónico desde las primeras etapas.',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tiempo: '6 min lectura'
    },
    {
      id: 6,
      titulo: 'Ciudades Inteligentes: El Rol del Arquitecto',
      fecha: '10 de Septiembre, 2024',
      autor: 'Diego López',
      categoria: 'Urbanismo',
      extracto: 'Cómo los arquitectos están integrando tecnología IoT y datos en el diseño de espacios urbanos del futuro.',
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      tiempo: '7 min lectura'
    }
  ]

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Blog</h1>
          <p className="page-subtitle">
            Reflexiones, tendencias e innovaciones en arquitectura global
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map(post => (
              <article key={post.id} className="blog-card">
                <div 
                  className="blog-image"
                  style={{background: post.color}}
                >
                  <span className="blog-categoria">{post.categoria}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-fecha">📅 {post.fecha}</span>
                    <span className="blog-tiempo">⏱️ {post.tiempo}</span>
                  </div>
                  <h2 className="blog-titulo">{post.titulo}</h2>
                  <p className="blog-extracto">{post.extracto}</p>
                  <div className="blog-footer">
                    <span className="blog-autor">✍️ {post.autor}</span>
                    <button className="btn">Leer más</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <h2>Suscríbete a Nuestro Newsletter</h2>
            <p>Recibe las últimas noticias, artículos y proyectos directamente en tu correo</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">Suscribirse</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
