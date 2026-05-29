const express = require('express');
const router = express.Router();

const faunaTerrestre = [
    { id: 1, nombre: "Guanaco", habitat: "Cordillera de la Costa", info: "Camélido silvestre que aprovecha la camanchaca." },
    { id: 2, nombre: "Zorro Chilla", habitat: "Desierto de Atacama", info: "Pequeño cánido adaptado a las condiciones extremas." }
];

router.get('/', (req, res) => {
    res.status(200).json(faunaTerrestre);
});

module.exports = router;