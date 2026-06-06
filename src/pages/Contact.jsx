import { useState } from 'react'
import { useToast } from '../components/Toast'

export default function Contact() {
  const notify = useToast()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)

  const handle = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = () => {
    if (!form.name || !form.email || !form.message) {
      notify('⚠️ Completa todos los campos')
      return
    }
    setSent(true)
    notify('✅ Mensaje enviado correctamente!')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="contact-wrap">
      <div className="contact-card">
        <h2 className="contact-title">Contáctanos 📬</h2>
        <p className="contact-sub">
          ¿Tienes alguna sugerencia o quieres colaborar? Escríbenos.
        </p>

        <div className="form-group">
          <label>Nombre</label>
          <input
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handle}
          />
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={form.email}
            onChange={handle}
          />
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tu mensaje..."
            value={form.message}
            onChange={handle}
          />
        </div>

        <button className="btn-primary" onClick={submit}>
          {sent ? '✅ Enviado!' : 'Enviar mensaje'}
        </button>
      </div>
    </div>
  )
}
