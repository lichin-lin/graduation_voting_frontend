sync_dev:
	gsutil rsync -d dist gs://static.dev.next.clinic
	gsutil acl ch -u AllUsers:R -r gs://static.dev.next.clinic
	gsutil web set -m index.html gs://static.dev.next.clinic

sync_production:
	gsutil rsync -d dist gs://static.next.clinic
	gsutil acl ch -u AllUsers:R -r gs://static.next.clinic
	gsutil web set -m index.html gs://static.next.clinic

install:
	npm install

run:
	npm run dev

build-dev:
	npm install
	cp deployment/dev.config.js src/js/config.js
	npm run relay
	npm run build

build-production:
	npm run relay
	npm run build

install_dev:
	kubectl create -f deployment/dev-service.yaml
	kubectl create -f deployment/dev-ingress.yaml

install_production:
	kubectl create -f deployment/production-service.yaml
	kubectl create -f deployment/production-ingress.yaml

apply_dev:
	kubectl apply -f deployment/dev-service.yaml
	kubectl apply -f deployment/dev-ingress.yaml

apply_production:
	kubectl apply -f deployment/production-service.yaml
	kubectl apply -f deployment/production-ingress.yaml
