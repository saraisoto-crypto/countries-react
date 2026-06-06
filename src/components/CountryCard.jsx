import { useToast } from './Toast'

export default function CountryCard({ country, isFav, onToggleFav }) {
  const notify = useToast()
  const name   = country.name.common
  const flag   = country.flags?.svg || country.flags?.png || ''

  const handleFav = (e) => {
    e.stopPropagation()
    onToggleFav(name)
    notify(isFav ? `💔 Eliminado de favoritos` : `❤️ ${name} guardado!`)
  }

  return (
    <div className="card">
      <img
        src={flag}
        alt={`Bandera de ${name}`}
        className="card-flag"
        loading="lazy"
      />
      <div className="card-body">
        <button className="fav-btn" onClick={handleFav} aria-label="Toggle favorito">
          {isFav ? '❤️' : '🤍'}
        </button>
        <div className="card-name" title={name}>{name}</div>
        <div className="card-region">{country.region || '—'}</div>
      </div>
    </div>
  )
}
