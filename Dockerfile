FROM node:24-alpine AS dev 
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM node:24-alpine AS prod
WORKDIR /app
COPY --from=builder /app/dist .
RUN npm i -g serve
CMD [ "serve", "-s", "./browser", "-p", "4200" ]