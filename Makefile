install:
	npm ci

publish:
	npm publish --dry-run 

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8