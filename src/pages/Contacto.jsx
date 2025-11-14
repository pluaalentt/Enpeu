import { useState } from 'react'
import './Contacto.css'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Gracias por contactarnos. Te responderemos pronto.')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    })
  }

  return (
    <div className="contacto-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Contacto</h1>
          <p className="page-subtitle">
            Estamos aquí para ayudarte a hacer realidad tu proyecto arquitectónico
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contacto-grid">
            {/* Información de contacto */}
            <div className="contacto-info">
              <h2>Información de Contacto</h2>
              <p className="info-intro">
                Nos encantaría saber de ti. Contáctanos por cualquiera de estos medios o completa el formulario.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Oficina Principal</h3>
                    <p>C/ de Cavanilles, 16<br/>El Pla del Real, 46010 València, España</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p><a href="mailto:info@enpeu.org">info@enpeu.org</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🌐</div>
                  <div className="info-content">
                    <h3>Redes Sociales</h3>
                    <p>Síguenos en Facebook y LinkedIn</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div className="info-content">
                    <h3>Horario</h3>
                    <p>Lunes - Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="oficinas-internacionales">
                <h3>Red Internacional</h3>
                <p>Somos una cooperativa internacional de arquitectura con presencia en múltiples países.</p>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="contacto-form-container">
              <h2>Envíanos un Mensaje</h2>
              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="asunto">Asunto *</label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="nuevo-proyecto">Nuevo Proyecto</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="consulta">Consulta General</option>
                    <option value="empleo">Oportunidades de Empleo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mapa-section">
        <div className="container">
          <h2 className="section-title">Nuestra Ubicación</h2>
          <div className="mapa-placeholder">
            <p>📍 C/ de Cavanilles, 16, El Pla del Real, 46010 València, España</p>
            <p style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '10px'}}>
              Integración con Google Maps disponible
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
