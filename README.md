# Full-Stack Application with Docker

This project contains a full-stack application with a Node.js/Express frontend and a Flask backend, both containerized using Docker.

## Project Structure

```
.
├── frontend/
│   ├── app.js
│   ├── package.json
│   ├── Dockerfile
│   └── views/
│       ├── form.ejs
│       ├── response.ejs
│       └── error.ejs
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yaml
├── .gitignore
└── README.md
```

## Features

- **Frontend**: Express.js server with EJS templating
- **Backend**: Flask REST API
- **Docker**: Both services containerized with Docker Compose
- **Form**: User-friendly form with validation

## Prerequisites

- Docker and Docker Compose installed
- Git (for version control)

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd "Task Docker"
```

### 2. Build and Run with Docker Compose

```bash
docker-compose up --build
```

This will:
- Build both frontend and backend Docker images
- Start both containers
- Connect them on the same Docker network

### 3. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## API Endpoints

### Backend Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `POST /process` - Process form data

## Building Docker Images for Docker Hub

### 1. Build the images

```bash
docker-compose build
```

### 2. Tag the images (replace `yourusername` with your Docker Hub username)

```bash
docker tag express-frontend yourusername/frontend:latest
docker tag flask-backend yourusername/backend:latest
```

### 3. Login to Docker Hub

```bash
docker login
```

### 4. Push the images

```bash
docker push yourusername/frontend:latest
docker push yourusername/backend:latest
```

## Using Pre-built Images from Docker Hub

If you want to use images from Docker Hub instead of building locally, modify `docker-compose.yaml`:

```yaml
services:
  frontend:
    image: yourusername/frontend:latest
    # Remove the build section
  backend:
    image: yourusername/backend:latest
    # Remove the build section
```

## Development

### Running Frontend Locally (without Docker)

```bash
cd frontend
npm install
node app.js
```

### Running Backend Locally (without Docker)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

**Note**: When running locally, update the backend URL in `frontend/app.js` from `http://backend:5000` to `http://localhost:5000`.

## Stopping the Application

```bash
docker-compose down
```

To remove volumes as well:

```bash
docker-compose down -v
```

## GitHub Setup

1. Initialize git repository:
```bash
git init
```

2. Add all files:
```bash
git add .
```

3. Commit:
```bash
git commit -m "Initial commit: Full-stack app with Docker"
```

4. Add remote and push:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Troubleshooting

- If ports 3000 or 5000 are already in use, modify the port mappings in `docker-compose.yaml`
- Ensure Docker is running before executing docker-compose commands
- Check container logs: `docker-compose logs frontend` or `docker-compose logs backend`

## License

MIT

