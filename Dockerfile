FROM node:alpine

# Installs latest Chromium package.
RUN echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories \
	&& apk add --no-cache --quiet \
	chromium@edge \
	chromium-chromedriver@edge \
	nss@edge \
	&& rm -rf /var/cache/* \
	&& mkdir /var/cache/apk

# Smoke tests
RUN chromedriver --version
RUN node --version

ENV APP_DIR=/usr/src/app \
	CHROME_BIN=/usr/bin/chromium-browser \
	CHROME_PATH=/usr/lib/chromium/

WORKDIR $APP_DIR
# COPY package*.json $APP_DIR/
# RUN npm install

# COPY . $APP_DIR