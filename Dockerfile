FROM node:25-alpine3.23 AS dev 
# Set the working directory inside the container
WORKDIR /app
# Copy only the dependency files first to optimize Docker caching
COPY package.json package-lock.json* ./
# Install dependencies using npm with caching to speed up subsequent builds
RUN --mount=type=cache,target=/root/.npm npm install
# Copy all application source files into the container
COPY . .
# Start the Angular dev server and bind it to all network interfaces
CMD ["npm", "run", "dev", "--", "--host=0.0.0.0"]

FROM node:25-alpine3.23 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --omit=dev 

FROM node:25-alpine3.23 AS prod

WORKDIR /app

COPY --from=builder /app/dist /app

RUN npm i -g serve

CMD [ "serve", "-s", "./browser", "-p", "4200" ]