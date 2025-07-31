.PHONY: dev lint test format setup

dev:
	docker compose up --build
	npm run start:dev --workspace=apps/sutra-api

lint:
	npx eslint .

test:
	npx jest

test:watch:
	npm run test:watch

format:
	npx prettier --write .

setup:
	npm install

deploy:
	ansible-playbook infra/ansible/playbook.yml

precommit:
	npm run lint && npm run test

seed:
	node tools/data-seeder/seed.js

loadtest:
	k6 run tests/load-test-scenarios/k6-orders.js

