# 🏠 Realty Catalog / Catálogo Inmobiliario

> **EN** Real estate property catalog built with React/TypeScript, fully dockerized and served through a centralized Nginx reverse proxy.
>
> **ES** Catálogo de propiedades inmobiliarias construido con React/TypeScript, completamente dockerizado y servido a través de un proxy inverso Nginx centralizado.

---

## 📁 Project Structure / Estructura del Proyecto

```
realty-catalog-website/
├── src/                            # React/TypeScript source code
├── public/
├── Dockerfile                      # Production image (multi-stage)
├── Dockerfile.dev                  # Development image (Vite server)
├── docker-compose.yml              # Production
├── docker-compose.dev.yml          # Development (hot reload)
├── .env.development                # Dev API URL
├── .env.production                 # Prod API URL
├── Jenkinsfile                     # CI/CD pipeline
├── .dockerignore
└── scripts/
    └── deploy.sh                   # Manual deploy script
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + TypeScript + Vite |
| Web Server | Nginx (Alpine) |
| Containerization | Docker + Docker Compose |
| CI/CD | Jenkins |

---

## ⚙️ Setup

### Prerequisites / Prerrequisitos

- Docker + Docker Compose
- Jenkins (optional / opcional)
- Master Nginx running / Master Nginx corriendo ([disenmix-music-store-CI-CD](https://github.com/starwalker-studio/disenmix-music-store-CI-CD))

### 1. Clone the repository / Clonar el repositorio

```bash
git clone https://github.com/starwalker-studio/realty-catalog-website.git
cd realty-catalog-website
```

### 2. Add domain to /etc/hosts / Agregar dominio al /etc/hosts

```
127.0.0.1    app.realty-catalog.local
```

> **EN** On a remote server replace `127.0.0.1` with the server's IP.
>
> **ES** En un servidor remoto reemplaza `127.0.0.1` por la IP del servidor.

### 3. Start the master proxy first / Levantar el proxy master primero

> ⚠️ **EN** Make sure [master-nginx](https://github.com/starwalker-studio/disenmix-music-store-CI-CD) is running before this project. It creates the shared `proxy-network` network that this project joins.
>
> ⚠️ **ES** Asegúrate de que [master-nginx](https://github.com/starwalker-studio/disenmix-music-store-CI-CD) esté corriendo antes que este proyecto. Es quien crea la red compartida `proxy-network` a la que este proyecto se une.

### 4. Start production / Levantar producción

```bash
docker compose -f docker-compose.yml up -d --build
```

**EN** Accessible at / **ES** Accesible en: `http://app.realty-catalog.local`

### 5. Start development / Levantar desarrollo

```bash
docker compose -f docker-compose.dev.yml up --build
```

**EN** Development runs with hot reload at / **ES** Desarrollo corre con hot reload en: `http://localhost:5173`

---

## 🔒 Environment Variables / Variables de Entorno

**EN** Configure the API URL for each environment in:

**ES** Configura la URL de la API para cada ambiente en:

```bash
# Development / Desarrollo
.env.development
VITE_API_HOST=http://localhost:8000/api

# Production / Producción
.env.production
VITE_API_HOST=http://api.your-backend.com/api
```

---

## 📄 License / Licencia

MIT
