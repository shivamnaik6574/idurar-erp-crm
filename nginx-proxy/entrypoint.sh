#!/bin/sh

# Create certificate directory
mkdir -p /etc/nginx/certs/live

# Generate self-signed SSL certificate
echo "Generating self-signed SSL certificate..."
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/certs/live/privkey.pem \
    -out /etc/nginx/certs/live/cert.pem \
    -subj "/C=US/ST=State/L=City/O=IDURAR/CN=44.196.176.222"

echo "Self-signed certificate generated successfully!"

exec "$@"
