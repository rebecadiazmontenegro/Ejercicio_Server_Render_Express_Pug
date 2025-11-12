const express = require("express");
require("dotenv").config();
const filmsRouter = require("./routes/filmsWeb.route");

const app = express();
const port = 3000;

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views','./views');

// Habilitar recepción de JSON por mi backend
// Parsear el body entrante a JSON
app.use(express.json());
app.use(express.static('public')); // Para servir archivos estáticos del front CSS, JS, assets

// Middleware para leer formularios
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/", filmsRouter);

// Servidor
app.listen(port, () => {
  console.log(`Servidor de películas en http://localhost:${port}`);
});

module.exports = app;