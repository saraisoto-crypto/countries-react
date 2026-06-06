import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-logo">🌍 World Explorer</span>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/entities" className={({ isActive }) => isActive ? 'active' : ''}>
            Countries
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
