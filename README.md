# 🌍 World Explorer

Una SPA en React 19 que consume la API pública de REST Countries para explorar información de países del mundo.

## 📸 Demo

> **Deploy:** [Ver en Vercel](https://countries-react-[TU-USUARIO].vercel.app)  
> **Video:** [Ver en YouTube](https://youtube.com/...)

---

## 🚀 Tecnologías

| Tecnología | Versión |
|---|---|
| React | 19 |
| Vite | 5 |
| React Router DOM | 6 |
| Axios | 1.7 |

---

## ⚙️ Funcionalidades

- 🌐 **Consumo de API** — REST Countries (`/v3.1/all`)
- 🏠 **Home** — Hero, buscador y grilla de países con bandera y región
- 📜 **Entities** — Tabla con bandera, país, región, capital y población
- 📬 **Contact** — Formulario de contacto con validación
- ❤️ **Favoritos** — Guardados en `localStorage`
- 🔔 **Notificaciones** — Toast al agregar/quitar favoritos
- ⏳ **Loader** — Spinner mientras carga la API

---

## 📁 Estructura del Proyecto

```
countries-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CountryCard.jsx
│   │   └── Toast.jsx
│   ├── hooks/
│   │   └── useCountries.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Entities.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/saraisoto-crypto/countries-react.git

# 2. Entrar al proyecto
cd countries-react

# 3. Instalar dependencias
npm install

# 4. Correr en modo desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📦 Build para producción

```bash
npm run build
```

---

## 🌐 API utilizada

[REST Countries](https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital)

---

## 👩‍💻 Autora

Sarai Soto — [@saraisoto-crypto](https://github.com/saraisoto-crypto)
