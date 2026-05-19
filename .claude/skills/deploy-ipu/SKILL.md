---
name: deploy-ipu
description: Docker Compose config template for deploying services on the ipu server under /data/ipu/puem/. Covers network setup, volume mounts, and service-specific gotchas.
---

# Docker Compose Config — IPU Server

## Networks

| Network | หน้าที่ |
|---------|---------|
| `ipuserver_internal` | communication ระหว่าง container ภายใน (เช่น app ↔ db) |
| `ipuserver_webserver` | nginx มองเห็น container ที่ port 80 — เฉพาะ public-facing เท่านั้น |

- ไม่ expose port ออก host เลย
- Backend/DB ต่อแค่ `ipuserver_internal`
- App ที่ให้ nginx เข้าถึงต่อทั้งสอง network
- URL pattern: `https://ipulab.com/service/<container-name>/`

---

## Basic Template

```yaml
name: ipuserver

services:
  app:
    image: <image>:latest
    container_name: <name>
    restart: unless-stopped
    volumes:
      - ./data:/path/in/container
    networks:
      - ipuserver_internal
      - ipuserver_webserver

networks:
  ipuserver_internal:
    external: true
  ipuserver_webserver:
    external: true
```

---

## With Database (PostgreSQL)

```yaml
name: ipuserver

services:
  app:
    image: <image>:latest
    container_name: <name>
    restart: unless-stopped
    depends_on:
      - db
    volumes:
      - ./data:/path/in/container
    networks:
      - ipuserver_internal    # คุยกับ db
      - ipuserver_webserver   # nginx เข้าถึงได้

  db:
    image: postgres:16-alpine
    container_name: <name>_db
    restart: unless-stopped
    environment:
      - POSTGRES_DB=<dbname>
      - POSTGRES_USER=<user>
      - POSTGRES_PASSWORD=<password>
    volumes:
      - ./db:/var/lib/postgresql/data
    networks:
      - ipuserver_internal    # internal only

networks:
  ipuserver_internal:
    external: true
  ipuserver_webserver:
    external: true
```

---

## Full Example — Immich

Immich มีหลาย container: server, microservices, machine learning, redis, postgres

```yaml
name: ipuserver

services:

  # ── Public-facing ──────────────────────────────────────────
  immich-server:
    image: ghcr.io/immich-app/immich-server:release
    container_name: immich
    restart: unless-stopped
    depends_on:
      - immich-redis
      - immich-db
    environment:
      - DB_HOSTNAME=immich-db
      - DB_PORT=5432
      - DB_DATABASE_NAME=immich
      - DB_USERNAME=immich
      - DB_PASSWORD=immich_secret
      - REDIS_HOSTNAME=immich-redis
      - UPLOAD_LOCATION=/usr/src/app/upload
      - IMMICH_MACHINE_LEARNING_URL=http://immich-ml:3003
    volumes:
      - ./upload:/usr/src/app/upload
    networks:
      - ipuserver_internal    # คุยกับ db, redis, ml
      - ipuserver_webserver   # nginx เข้าถึง port 3001

  # ── Background workers ──────────────────────────────────────
  immich-microservices:
    image: ghcr.io/immich-app/immich-server:release
    container_name: immich-microservices
    command: start-microservices
    restart: unless-stopped
    depends_on:
      - immich-redis
      - immich-db
    environment:
      - DB_HOSTNAME=immich-db
      - DB_PORT=5432
      - DB_DATABASE_NAME=immich
      - DB_USERNAME=immich
      - DB_PASSWORD=immich_secret
      - REDIS_HOSTNAME=immich-redis
      - UPLOAD_LOCATION=/usr/src/app/upload
    volumes:
      - ./upload:/usr/src/app/upload
    networks:
      - ipuserver_internal    # internal only — ไม่ต้องให้ nginx เห็น

  immich-ml:
    image: ghcr.io/immich-app/immich-machine-learning:release
    container_name: immich-ml
    restart: unless-stopped
    volumes:
      - ./model-cache:/cache
    networks:
      - ipuserver_internal    # internal only

  # ── Data layer ──────────────────────────────────────────────
  immich-redis:
    image: redis:7-alpine
    container_name: immich-redis
    restart: unless-stopped
    networks:
      - ipuserver_internal    # internal only

  immich-db:
    image: tensorchord/pgvecto-rs:pg16-v0.2.0
    container_name: immich-db
    restart: unless-stopped
    environment:
      - POSTGRES_DB=immich
      - POSTGRES_USER=immich
      - POSTGRES_PASSWORD=immich_secret
    volumes:
      - ./db:/var/lib/postgresql/data
    networks:
      - ipuserver_internal    # internal only

networks:
  ipuserver_internal:
    external: true
  ipuserver_webserver:
    external: true
```

เข้าใช้งานที่ `https://ipulab.com/service/immich/`

