# NestJS Redis Starter


This is a NestJS project template that demonstrates how to integrate Redis into your NestJS application. Redis is a powerful in-memory data store that can be used for caching, session management, and more.

## Features

- **NestJS**: A progressive Node.js framework for building efficient, scalable, and maintainable server-side applications.
- **Redis**: A fast and versatile in-memory key-value data store.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (at least version 14)
- npm or yarn installed
- Redis server running (you can use Docker or install it locally)

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/your-username/nestjs-redis-starter.git
cd caching
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create your own env file:
```bash
REDIS_HOST=
REDIS_PORT=
REDIS_USERNAME=
REDIS_PASSWORD=
```

4. Spin up local environment:
```bash
# for nest app
npm run start:dev

# for redis cache
docker compose up
```
