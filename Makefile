#!/usr/bin/make -f
app=app

install:
	cp backend/.env.example backend/.env
	cd backend && docker-compose build
	cd backend && docker-compose up -d
	cd backend && docker-compose exec ${app} composer install
	cd backend && docker-compose exec ${app} php artisan migrate --seed
	cd backend && docker-compose exec ${app} php artisan config:clear
	cd backend && docker-compose exec app php artisan key:generate
	echo "Backend is running at 127.0.0.1"
	cd frontend && npm install

down:
	cd backend && docker-compose down --remove-orphans

up:
	cd backend && docker-compose up -d

run:
	cd backend && docker-compose up -d
	echo "Backend is running at 127.0.0.1"
	cd frontend && npm run serve

restart:
	cd backend && docker-compose down
	cd backend && docker-compose up -d
	echo "Backend is running at 127.0.0.1"

jumpin:
	cd backend && docker-compose exec ${app} bash
