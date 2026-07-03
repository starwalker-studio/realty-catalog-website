#!/bin/bash

# ============================================
# Script de deploy - Microservicio "payments-api"
# Uso: ./deploy.sh [dev|staging|prod]
# ============================================

set -e  # Si cualquier comando falla, el script se detiene inmediatamente

LOG_DIR="./logs"
LOG_FILE="$LOG_DIR/deploy_$(date +%Y%m%d_%H%M%S).log"
ENVIRONMENT="${1:-}"  # Toma $1, o vacío si no se pasó nada

mkdir -p "$LOG_DIR"  # Crea la carpeta de logs si no existe

log() {
    # Función para imprimir Y guardar en archivo al mismo tiempo
    echo "$1" | tee -a "$LOG_FILE"
}

log "=========================================="
log "Deploy iniciado: $(date)"
log "Usuario: $(whoami)"
log "Ambiente solicitado: ${ENVIRONMENT:-'(ninguno)'}"
log "=========================================="

case "$ENVIRONMENT" in
    dev|DEV|Dev)
        log "✅ Iniciando entorno de DESARROLLO"
        sudo docker compose -f docker-compose.dev.yml up --build -d 2>&1 | tee -a "$LOG_FILE"
        ;;
    prod|PROD|Prod|production)
        log "✅ Iniciando entorno de PRODUCCIÓN"
        sudo docker compose -f docker-compose.yml up --build -d 2>&1 | tee -a "$LOG_FILE"
        ;;
    "")
        log "❌ ERROR: No especificaste ambiente."
        log "Uso correcto: ./deploy.sh dev   o   ./deploy.sh prod"
        exit 1
        ;;
    *)
        log "❌ ERROR: '$ENVIRONMENT' no es un ambiente válido."
        log "Ambientes permitidos: dev, prod"
        exit 1
        ;;
esac

log "Deploy finalizado: $(date)"
log "=========================================="