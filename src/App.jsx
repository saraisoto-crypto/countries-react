import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastProvider } from './components/Toast'
import Home from './pages/Home'
import Entities from './pages/Entities'
import Contact from './pages/Contact'

export default function App() {
  return (
    <ToastProvider>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/entities" element={<Entities />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </ToastProvider>
  )
}
