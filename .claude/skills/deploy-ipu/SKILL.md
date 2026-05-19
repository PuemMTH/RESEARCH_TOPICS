---
name: deploy-ipu
description: Deploy a new service to the ipu server. Covers folder structure, docker-compose network config, and important commands.
---

# Deploy Service — IPU Server

## Folder Structure

วางทุก service ไว้ที่ `/data/ipu/puem/<service-name>/`

```
/data/ipu/puem/<service-name>/
├── docker-compose.yml
├── data/        ← bind mount สำหรับ app data
└── db/          ← bind mount สำหรับ database
```

```bash
ssh ipu "mkdir -p /data/ipu/puem/<service-name>/{data,db}"
```

---

## Networks

| Network | หน้าที่ |
|---------|---------|
| `ipuserver_internal` | communication ระหว่าง container ภายใน (app ↔ db ↔ cache) |
| `ipuserver_webserver` | nginx มองเห็น container ที่ port 80 — เฉพาะ public-facing เท่านั้น |

- ไม่ expose port ออก host เลย
- DB / cache / worker ต่อแค่ `ipuserver_internal`
- URL pattern: `https://ipulab.com/service/<container-name>/`

---

## Important Commands

```bash
# Deploy
ssh ipu "cd /data/ipu/puem/<service-name> && docker compose up -d"

# Stop
ssh ipu "cd /data/ipu/puem/<service-name> && docker compose down"

# Restart single container
ssh ipu "docker restart <container-name>"

# Logs
ssh ipu "docker logs <container-name> --tail 50 -f"

# Check status
ssh ipu "docker ps --filter name=<service-name> --format 'table {{.Names}}\t{{.Status}}\t{{.Networks}}'"
```

> ⚠️ `docker compose down` หยุด container แต่ข้อมูลใน `./data` และ `./db` ยังอยู่ครบ
> ⚠️ ถ้าต้องการล้าง DB ให้ลบ `./db/*` แยกต่างหาก อย่า rm -rf ทั้ง folder โดยไม่ตั้งใจ

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

## Full Example — Immich (multi-container)

```
/data/ipu/puem/immich/
├── docker-compose.yml
├── upload/       ← photos/videos
├── model-cache/  ← ML models
└── db/           ← postgres data
```

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
      - ipuserver_webserver   # nginx เข้าถึงได้

  # ── Background workers (internal only) ─────────────────────
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
      - DB_DATABASE_NAME=immich
      - DB_USERNAME=immich
      - DB_PASSWORD=immich_secret
      - REDIS_HOSTNAME=immich-redis
      - UPLOAD_LOCATION=/usr/src/app/upload
    volumes:
      - ./upload:/usr/src/app/upload
    networks:
      - ipuserver_internal

  immich-ml:
    image: ghcr.io/immich-app/immich-machine-learning:release
    container_name: immich-ml
    restart: unless-stopped
    volumes:
      - ./model-cache:/cache
    networks:
      - ipuserver_internal

  # ── Data layer (internal only) ──────────────────────────────
  immich-redis:
    image: redis:7-alpine
    container_name: immich-redis
    restart: unless-stopped
    networks:
      - ipuserver_internal

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
      - ipuserver_internal

networks:
  ipuserver_internal:
    external: true
  ipuserver_webserver:
    external: true
```

เข้าใช้งานที่ `https://ipulab.com/service/immich/`
