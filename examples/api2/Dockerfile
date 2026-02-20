FROM node:22-alpine
WORKDIR /usr/src/app

RUN rm -rf /var/lib/apt/lists/*

COPY package.json pnpm-lock.yaml ./

RUN npm i pnpm --global

RUN pnpm i

EXPOSE 3333

CMD ["pnpm", "run", "dev"]
