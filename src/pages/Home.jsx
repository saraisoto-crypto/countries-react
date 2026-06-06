import { useState, useMemo } from 'react'
import { useCountries } from '../hooks/useCountries'
import CountryCard from '../components/CountryCard'

export default function Home() {
  const { countries, loading, error, favorites, toggleFav } = useCountries()
  const [search, setSearch] = useState('')

  const filtered = useMemo(() =>
    countries.filter(c =>
      c.name.common.toLowerCase().includes(search.toLowerCase())
    ),
    [countries, search]
  )

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="badge">🌐 REST Countries API · {countries.length} países</div>
          <h1 className="hero-title">
            Explora el<br /><span>Mundo</span>
          </h1>
          <p className="hero-sub">
            Descubre países, sus banderas y regiones. Guarda tus favoritos y explora el atlas completo.
          </p>

          {/* SEARCH */}
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar país..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* STATS */}
          {!loading && (
            <div className="stats-bar">
              <div className="stat">
                <div className="stat-num">{countries.length}</div>
                <div className="stat-label">Países</div>
              </div>
              <div className="stat">
                <div className="stat-num">{[...new Set(countries.map(c => c.region))].filter(Boolean).length}</div>
                <div className="stat-label">Regiones</div>
              </div>
              <div className="stat">
                <div className="stat-num">{favorites.length}</div>
                <div className="stat-label">Favoritos</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <div className="container">
        {loading && (
          <div className="loader-wrap">
            <div className="spinner" />
            <p className="loader-text">Cargando países...</p>
          </div>
        )}

        {error && <p style={{ color: '#ff6584', textAlign: 'center', padding: '2rem' }}>{error}</p>}

        {!loading && !error && (
          <div className="grid">
            {filtered.map((c, i) => (
              <div key={c.name.common} style={{ animationDelay: `${Math.min(i * 0.03, 0.6)}s` }}>
                <CountryCard
                  country={c}
                  isFav={favorites.includes(c.name.common)}
                  onToggleFav={toggleFav}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
