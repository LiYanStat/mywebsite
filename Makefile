# local build and watch
.PHONY: watch
watch:
	hugo server -w

# build and publish to public/
.PHONY: build
build:
	hugo

.PHONY: clean
clean:
	rm -rf public/ *~
