# Deployment Guide

## Quick Start Commands

### 1. Build and Run Locally

```bash
docker-compose up --build
```

### 2. Push to Docker Hub

Replace `yourusername` with your Docker Hub username:

```bash
# Build images
docker-compose build

# Tag images
docker tag express-frontend yourusername/frontend:latest
docker tag flask-backend yourusername/backend:latest

# Login to Docker Hub
docker login

# Push images
docker push yourusername/frontend:latest
docker push yourusername/backend:latest
```

### 3. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Full-stack app with Docker"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Using Pre-built Images

To use images from Docker Hub, update `docker-compose.yaml`:

```yaml
services:
  frontend:
    image: yourusername/frontend:latest
    ports:
      - "3000:3000"
    # Remove build section
  
  backend:
    image: yourusername/backend:latest
    ports:
      - "5000:5000"
    # Remove build section
```

Then run:
```bash
docker-compose pull
docker-compose up
```

