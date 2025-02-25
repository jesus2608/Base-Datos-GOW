const express = require("express");
const path = require("path");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();
const apiRouter = jsonServer.router("db.json");

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Servir archivos estáticos desde el build de Angular
app.use(express.static(path.join(__dirname, "dist/practica-final/browser")));

// Redirigir todas las rutas al `index.html`
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/practica-final/browser/index.html"));
});

// Agregar JSON Server en la ruta `/api`
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
