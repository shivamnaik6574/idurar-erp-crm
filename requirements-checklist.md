# Requirements Checklist

# AWS EC2 Instance
- Ubuntu 20.04 or later
- Minimum 2 vCPU, 4GB RAM, 20GB Storage
- Public IP: 44.196.176.222 (Elastic-ip)
- Security Group: Ports 22, 80, 443 open

# Software
- Docker 20.10+
- Docker Compose 1.29+
- Git

# 4 Containers Required
1. **MongoDB** - Database (Port 27017 internal)
2. **Backend** - Node.js API (Port 3000 internal)
3. **Frontend** - React App (Port 80 internal)
4. **Nginx Proxy** - SSL/HTTPS (Ports 80, 443 exposed)

# Port Mapping
- Host 80 → Nginx Proxy (HTTP redirect to HTTPS)
- Host 443 → Nginx Proxy (HTTPS)
- Internal: Frontend:80, Backend:3000, MongoDB:27017

# New Relic
- NEW_RELIC_LICENSE_KEY
- NEW_RELIC_APP_NAME
- NEW_RELIC_LOG_LEVEL

# Docker Files
- backend/Dockerfile
- frontend/Dockerfile
- nginx-proxy/Dockerfile
- docker-compose.yml

# Configuration Files
- frontend/nginx.conf
- nginx-proxy/nginx.conf
- nginx-proxy/entrypoint.sh

# Environment Files
- .env (server only, not in Git)
- .env.example (template in Git)

#  Dependencies

# Backend
- express, mongoose, jsonwebtoken, bcryptjs, cors, dotenv
- newrelic (optional)

# Frontend
- react, react-dom, react-router-dom, antd, axios, vite

# Access Requirements

# Application
- URL: https://44.196.176.222
- Protocol: HTTPS (self-signed certificate)
- Credentials: admin@admin.com / admin123

# Data Persistence
- mongo-data volume for MongoDB

# Security
- HTTPS enforced, TLS 1.2/1.3
- Self-signed SSL certificate (365 days)
- JWT authentication bypassed

# Monitoring 
- New Relic Infrastructure Agent
- Docker Integration
- APM for Backend

# Limitations
- IP-based access only
- Self-signed SSL certificate
- Single server deployment
- Authentication bypassed for easy access
