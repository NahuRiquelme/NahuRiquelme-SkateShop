const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Estoy en home");
});

app.get("/detalle-producto", (req, res) => {
  res.send("Estoy en Detalle del Producto");
});

app.get("/inicio-sesion", (req, res) => {
  res.send("Estoy en inicio de sesion");
});

app.get("/registrarme", (req, res) => {
  res.send("Estoy en registrarme");
});

app.get("/carrito", (req, res) => {
  res.send("Estoy en carrito");
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto http://localhost:${PORT}`);
});
