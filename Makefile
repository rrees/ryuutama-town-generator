
test: build
	yarn run test

build:
	yarn run build

run: build
	node run.js