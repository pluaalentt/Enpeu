import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ENPEU</h3>
            <p>Cooperativa Internacional de Arquitectura</p>
            <p className="footer-description">
              Transformando espacios y comunidades a través del diseño arquitectónico sostenible y colaborativo.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/proyectos">Proyectos</a></li>
              <li><a href="/galeria">Galería</a></li>
              <li><a href="/colaboraciones">Colaboraciones</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-contact">
              <li>📧 info@enpeu.org</li>
              <li>📞 +34 900 123 456</li>
              <li>📍 Barcelona, España</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ENPEU - Cooperativa Internacional de Arquitectura. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
