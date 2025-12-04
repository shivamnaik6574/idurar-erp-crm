# IDURAR ERP/CRM - Docker Deployment Documentation

Deployed IDURAR ERP/CRM on AWS EC2 using Docker containers with HTTPS support.

Details :
- Platform: AWS EC2 Ubuntu
- IP: 44.196.176.222
- Containers: 4 (MongoDB, Backend, Frontend, Nginx Proxy)
- Access: https://44.196.176.222

# Containers
1. **MongoDB** - Database on port 27017
2. **Backend** - Node.js API on port 3000
3. **Frontend** - React app on port 80
4. **Nginx Proxy** - HTTPS reverse proxy on ports 80/443

# Network Flow
User → HTTPS (443) → Nginx Proxy → Frontend/Backend → MongoDB


# Docker Configuration
- Created Dockerfile for backend (Node.js)
- Created Dockerfile for frontend (React + Nginx)
- Created Dockerfile for nginx-proxy (SSL termination)
- Created docker-compose.yml (4 services + volume)

# SSL/HTTPS Setup
- Self-signed certificate auto-generated
- HTTP to HTTPS redirect
- Valid for 365 days

# New Relic Integration 
- Added newrelic package to backend
- Infrastructure agent monitors EC2
- APM monitors performance

# Environment Variables
- Created .env.example template
- Added .gitignore for .env file
- docker-compose.yml uses env_file

# File Structure
- backend/Dockerfile
- frontend/Dockerfile
- nginx-proxy/Dockerfile
- docker-compose.yml
- .env

# Access Information
- URL: https://44.196.176.222
- Default Login: admin@admin.com / admin123
- Certificate: Self-signed (browser warning expected)

# Container Commands

Start: docker-compose up -d
Stop: docker-compose down
Logs: docker-compose logs -f
Status: docker-compose ps
Rebuild: docker-compose up --build -d

# Key Features

- HTTPS enforced on all traffic
- Self-signed SSL certificate
- Auto-setup on first run
- Data persistence with volumes
- New Relic monitoring 

# Success Metrics

- All 4 containers running
- HTTPS accessible externally
- Dashboard loads correctly
- API integration working
- Database persisting data

Developer: Shivam Naik
Email: shivamnaik6574@gmail.com
GitHub: github.com/shivamnaik6574/idurar-erp-crm
