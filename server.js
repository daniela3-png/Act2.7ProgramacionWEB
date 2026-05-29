const express = require('express');
const app = express();
const PORT = 3000;

// Servir la maqueta desde la carpeta public
app.use(express.static('public'));

// Importar rutas de fauna
const marinaRoutes = require('./routes/marina');
const terrestreRoutes = require('./routes/terrestre');

// Registrar endpoints
app.use('/api/fauna/marina', marinaRoutes);
app.use('/api/fauna/terrestre', terrestreRoutes);

// Escuchar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});