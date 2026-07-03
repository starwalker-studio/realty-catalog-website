pipeline {
    agent any

    environment {
        COMPOSE_FILE_PROD = 'docker-compose.yml'
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                echo 'Clonando repositorio...'
                checkout scm
            }
        }
        stage('Construir imágenes') {
            steps {
                echo 'Construyendo imágenes Docker...'
                sh 'docker compose -f ${COMPOSE_FILE_PROD} build'
            }
        }

        stage('Limpiar contenedores anteriores') {
            steps {
                echo 'Bajando contenedores existentes...'
                sh 'docker compose -f ${COMPOSE_FILE_PROD} down'
            }
        }

        stage('Correr contenedores') {
            steps {
                echo 'Levantando contenedores...'
                sh 'docker compose -f ${COMPOSE_FILE_PROD} up -d'
            }
        }

        stage('Verificar') {
            steps {
                echo 'Verificando contenedores corriendo...'
                sh 'docker ps'
            }
        }
    }
    
    options {
       timestamps()
    }
}