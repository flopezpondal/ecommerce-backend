const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
    res.send(`Ruta principal de mi servidor NODEMON`);
})

// Metodo GET

api.get('/user', (req, res) => {
    return res.send({user: {
        name: "Jose",
        lastname: "Perez",
        age: 40,
        active: true
    }
    });
})

// Metodo POST

api.post('/user', (req, res) => {
    return res.status(200).send({
        message: 'Metodo POST'
    })
})

// Metodo DELETE

api.delete('/user', (req, res) => {
    return res.status(200).send({
        message: 'El usuario sera BORRADO'
    })
})

// Metodo PUT

api.put('/user', (req, res) => {
    return res.status(200).send({
        message: 'El ususario sera ACTUALIZADO'
    })
})

api.post('/login', (req, res) => {
    return res.send({ message: 'Login de Usuario' });
})

module.exports = api;