# NickFlix API

## Overview

This project pretends to be an replica of **Netflix**, but instead of streaming videos, movies, it will stream musics clips, discographies. Filtered by genre, artist, and some other things..

It is an updated version of [my deprecated previous clone using PHP and Laravel](https://github.com/nicolaslima321-labs/old-nickflix-api). The application will be developed using TypeScript and NestJs

### Requirements

- Docker and Docker-Compose installed
- NodeJs installed


---

## Setup

- The project was developed using docker to make things easier. To build the containers of application, you must run `docker-compose up -d`

### Database

- With the Postgres and properly up, you can create the database `nickflix_development` by postgres commands, acessing the container  through `docker-compose exec postgres bash`. Otherwise, you can manage through pgadmin, it will be running on http://localhost:16543 (Note this port was set on docker-compose.yml file, at pgadmin container), and first of all, access pgadmin using the credentials located on pgadmin environment. Then add your local postgres container on pgadmin, creating a server with the value of **POSTGRES_USER**, **POSTGRES_PASSWORD** located on docker-compose.yml, for host you can set the container name `postgres`

- The database name `nickflix_development` is defined at `.env` file, and also the credentials for access the database, if you want to change something, is very important to reflect this changes to `.env` file, otherwise server/database wont be reached/connected.

---

## Running

- You can execute the application by running `npm run start:dev`

---

## Tests

- Tests was developed using Jest, you execute it running `npm run test`
