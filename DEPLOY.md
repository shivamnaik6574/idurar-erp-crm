# Deployment Guide

## Setup on EC2 Server

### Step 1: Create .env File

On your EC2 server, create a `.env` file with your New Relic credentials:

```bash
cd ~/idurar-erp-crm

cat > .env << 'EOF'
NEW_RELIC_LICENSE_KEY=your-actual-license-key-here
NEW_RELIC_APP_NAME=IDURAR-Backend
NEW_RELIC_LOG_LEVEL=info
EOF
```

### Step 2: Deploy

```bash
docker-compose up --build -d
```

### Step 3: Verify

```bash
docker-compose ps
docker-compose logs backend | grep -i newrelic
```

## Without New Relic

If you don't want New Relic monitoring, simply don't create the `.env` file or leave `NEW_RELIC_LICENSE_KEY` empty. The application will work fine without it.

## Important

- The `.env` file is in `.gitignore` and will NOT be committed to Git
- Only `.env.example` is committed as a template
- Add your actual New Relic license key on the server only
