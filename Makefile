.PHONY: up down clean

COMPOSE_FILES:=-f docker-compose.base.yml \
	-f services/docker-compose.external-mqtt.yml \
	-f services/docker-compose.internal-mqtt.yml \
	-f services/docker-compose.node-red.yml

config:
	docker compose $(COMPOSE_FILES) config > docker-compose.yml

up:config
	docker compose up --build -d

down:
	docker compose down --volumes

clean:
	rm -f docker-compose.yml