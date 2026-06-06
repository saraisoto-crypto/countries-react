import { useState } from 'react'
import { useCountries } from '../hooks/useCountries'

export default function Entities() {
  const { countries, loading, error, favorites, toggleFav } = useCountries()
  const [search, setSearch] = useState('')

  const filtered = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Lista de <span>Países</span></h1>
        <p className="page-sub">{countries.length} países · filtra por nombre</p>
      </div>

      <div className="search-wrap" style={{ margin: '0 0 2rem' }}>
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Filtrar país..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading && (
        <div className="loader-wrap">
          <div className="spinner" />
          <p className="loader-text">Cargando...</p>
        </div>
      )}

      {error && <p style={{ color: '#ff6584' }}>{error}</p>}

      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Bandera</th>
              <th>País</th>
              <th>Región</th>
              <th>Capital</th>
              <th>Población</th>
              <th>Fav</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.name.common}>
                <td>
                  <img
                    src={c.flags?.svg || c.flags?.png}
                    alt={c.name.common}
                    className="flag-thumb"
                  />
                </td>
                <td style={{ fontWeight: 500 }}>{c.name.common}</td>
                <td style={{ color: 'var(--muted)' }}>{c.region || '—'}</td>
                <td style={{ color: 'var(--muted)' }}>{c.capital?.[0] || '—'}</td>
                <td style={{ color: 'var(--muted)' }}>
                  {c.population ? c.population.toLocaleString() : '—'}
                </td>
                <td>
                  <button
                    className="fav-btn"
                    onClick={() => toggleFav(c.name.common)}
                    aria-label="Toggle favorito"
                  >
                    {favorites.includes(c.name.common) ? '❤️' : '🤍'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
