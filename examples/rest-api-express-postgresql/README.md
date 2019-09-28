# Rest API using Express and PostgreSQL

## PostgreSQL setup

This example assumes you have a local PostgreSQL running and a database `api_db` setted. If not, you can follow those steps:

- `brew install postgresql`, install PostgreSQL
- `brew services start postgresql`, launch it
- `psql postgres`, connect to it
- `CREATE ROLE admin WITH LOGIN PASSWORD 'password';`, create an user
- `ALTER ROLE me CREATEDB;`, update his role
- `\q`, quit that session
- `psql -d postgres -U admin`, connect as admin
- `CREATE DATABASE api_db;`, create table

That's it!
