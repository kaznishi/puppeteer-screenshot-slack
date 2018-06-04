FROM node:8.11.2

RUN apt-get update \
  && apt-get install -y \
    ca-certificates \
    fontconfig \
    fonts-liberation \
    gconf-service \
    libappindicator1 \
    libasound2 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    lsb-release \
    unzip \
    wget \
    xdg-utils \
  && wget https://noto-website-2.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip \
  && mkdir /usr/share/fonts/noto \
  && unzip NotoSansCJKjp-hinted.zip -d /usr/share/fonts/noto/ \
  && fc-cache -v

WORKDIR /app/puppeteer-screenshot-slack

COPY . .
RUN yarn install

ENTRYPOINT ["node", "/app/puppeteer-screenshot-slack/index.js"]
CMD ["http://example.com"]