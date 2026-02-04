install:
	npm install

test:
	npm test

lint:
	npm run lint

test-coverage:
	npm test -- --coverage --coverageProvider=v8

ci: install lint test
