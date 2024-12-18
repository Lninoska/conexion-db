const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})
// CREATE DATABASE practica_db;

// CREATE TABLE estudiantes (
//     id SERIAL PRIMARY KEY,
//     nombres VARCHAR(50) NOT NULL,
//     apellidos VARCHAR(50) NOT NULL, 
//     n_identificacion INT NOT NULL
// );

// INSERT INTO estudiantes (nombres, apellidos, n_identificacion)
// VALUES
//     ('juan pedro', 'Perez Perez', 19876543),
//     ('María jose', 'Lopez Lopez', 19876544),
//     ('Carlos', 'Garcia Garcia', 19876545);

// CREATE TABLE cursos (
//     id SERIAL PRIMARY KEY,
//     titulo VARCHAR(50) NOT null,
//     descripcion VARCHAR(200) NOT NULL
// );

// INSERT INTO cursos (titulo, descripcion)
// VALUES
//     ('Dibujo anatomico', 'Técnica que consiste en representar el cuerpo humano de forma precisa'),
//     ('Biología Marina', 'Explora la vida marina y sus ecosistemas en distintos océanos del mundo.');

