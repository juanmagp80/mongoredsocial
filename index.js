//importar dependencias
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

//mensaje de bienvenida
console.log("Servidor de la red social corriendo");

//conexion a base de datos
connection();

//crear servidor node
const app = express();
const puerto = 3000;

//configurar cors

app.use(cors());

//convertir los datos del body a objetos js

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cargar conf rutas
const UserRoutes = require("./routes/user");
const FollowRoutes = require("./routes/follow");
const PublicationRoutes = require("./routes/publication");

app.use("/api/user", UserRoutes);
app.use("/api/follow", FollowRoutes);
app.use("/api/publication", PublicationRoutes);

//ruta de prueba
app.get("/ruta-prueba", (req, res) => {
  res.send("Hola mundo");
});

//poner servidor a escuchar peticiones http

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
