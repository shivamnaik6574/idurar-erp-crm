# Validation Checklist

# Local Environment
- All Docker files created
- docker-compose.yml configured
- .gitignore includes .env
- Code changes committed
- No secrets in Git

# AWS EC2
- Instance running
- Security Group allows ports 22, 80, 443
- SSH access working
- Docker installed
- Docker Compose installed

# Code Deployment
- Git repository cloned/pulled
- All files present
- .env file created with keys

# Build Process
- MongoDB image pulled
- Backend container builds
- Frontend container builds
- Nginx proxy builds
- No build errors

# Container Start
- Run: docker-compose up -d
- All 4 containers created
- All containers "Up" status

# Container Health
- idurar-mongo: Up
- idurar-backend: Up
- idurar-frontend: Up
- idurar-proxy: Up

# Application Validation

- "Express running → On PORT : 3000" visible
- MongoDB connected
- Setup completed (first run)
- New Relic connected (if enabled)
- Build completed
- Nginx started
- No errors in logs
- MongoDB responding
- SSL certificate generated
- Port 80 redirects to HTTPS
- Port 443 responds
- External access works
- Proxy routing works


# HTTPS Access
- https://44.196.176.222 loads
- Certificate warning (expected)
- Can proceed through warning

# Application
- Login page visible
- Click login works
- Dashboard loads
- No console errors
- API calls successful

# New Relic (Optional)
- Infrastructure agent active
- EC2 host visible
- Backend app in APM

# Performance
- Page load < 2 seconds
- API response < 500ms
- Container resources normal

# Security
- HTTPS enforced
- MongoDB not exposed

# Persistence
- Stop/restart containers
- Data persists


# End-to-End Flow
1. Open https://44.196.176.222
2. Accept certificate
3. See login page
4. Click login
5. Dashboard loads
6. All features work

# Production Ready
- All containers running
- HTTPS working
- Application accessible
- Logs clean
- Documentation complete