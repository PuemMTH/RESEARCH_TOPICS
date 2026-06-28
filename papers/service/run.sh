#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

case "${1:-up}" in
  up)   docker compose -f compose.reader.yaml up -d ;;
  down) docker compose -f compose.reader.yaml down ;;
  logs) docker compose -f compose.reader.yaml logs -f ;;
  *)    echo "usage: $0 [up|down|logs]" ;;
esac
