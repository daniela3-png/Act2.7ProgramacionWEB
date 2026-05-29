const express = require('express');
const router = express.Router();

const faunaMarina = [
    { id: 1, nombre: "Lobo Marino de un Pelo", habitat: "Costas de Cavancha", info: "Es común verlos descansando en las rocas del puerto." },
    { id: 2, nombre: "Pingüino de Humboldt", habitat: "Islotes cercanos", info: "Especie protegida que nidifica en las zonas rocosas." }
];

router.get('/', (req, res) => {
    res.status(200).json(faunaMarina);
});

module.exports = router;