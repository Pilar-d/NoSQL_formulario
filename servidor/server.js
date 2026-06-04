const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test')
.then(()=> console.log('conexion exitosa'))
.catch((err) => console.error('Error al conectar a MongoDB:', err));

// creamos la ENTIDAD en mongoose (ORM)
const usuario = new mongoose.Schema({
    nombre: String,
    rut: String,
    email: String,
    fechaNacimiento: Date,
    password: String
});

const Usuario = mongoose.model('Usuario', usuario, 'usuarios');

// crear el ENDPOINT para guardar un usuario en la base de datos
app.post('/guardarUsuario', async (req, res) => {
    try {
        const { nombre, rut, email, fechaNacimiento, password } = req.body;
        const nuevoUsuario = new Usuario({ nombre, rut, email, fechaNacimiento, password });
        await nuevoUsuario.save();
        res.status(200).json({ message: 'Usuario guardado exitosamente', usuario: nuevoUsuario });
    } catch (err) {
        console.log('Error al guardar el usuario:', err);
        res.status(500).json({ message: 'Error al guardar el usuario', err });
    }
});