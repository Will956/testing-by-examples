CREATE ROLE admin WITH LOGIN PASSWORD 'password';
CREATE DATABASE api_db;
GRANT ALL PRIVILEGES ON DATABASE api_db TO admin;