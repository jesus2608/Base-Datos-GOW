const express = require("express");
const path = require("path");
const jsonServer = require("json-server");
const app = express();
const apiRouter = jsonServer.router("db.json"); 
const middlewares = jsonServer.defaults();
app.use("/api", middlewares, apiRouter); 
app.use(express.static(path.join(__dirname, "dist/practica-final/browser")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/practica-final/browser/index.html"));
});
app.use("/api", apiRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});