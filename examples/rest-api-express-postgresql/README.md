# Rest API using Express and PostgreSQL

Simple API using PostgreSQL as a database.

## PostgreSQL setup

Use it with a local PostgreSQL running, you can follow those steps:

- `brew install postgresql`, install PostgreSQL
- `brew services start postgresql`, launch it
- `psql postgres`, connect to it
- `CREATE ROLE admin WITH LOGIN PASSWORD 'password';`, create a user
- `CREATE DATABASE api_db;`, create database
- `GRANT ALL PRIVILEGES ON DATABASE api_db TO admin;`, grant privileges
- `\q`, quit that session
- `yarn dev`, launch the app

That's it!

## Docker setup

Use it with docker, simply run

- `docker-compose up`, build and run images
