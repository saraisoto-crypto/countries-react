import { useState, useEffect } from 'react'
import axios from 'axios'

const FAVS_KEY = 'world-explorer-favs'

export function useCountries() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(FAVS_KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital', {
        signal: controller.signal,
      })
      .then(res => {
        const sorted = [...res.data].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
        setCountries(sorted)
      })
      .catch(err => {
        if (err.name !== 'CanceledError') setError('No se pudo cargar la API.')
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  const toggleFav = (name) => {
    setFavorites(prev => {
      const next = prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
      localStorage.setItem(FAVS_KEY, JSON.stringify(next))
      return next
    })
  }

  return { countries, loading, error, favorites, toggleFav }
}
