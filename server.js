const jsonServer = require("json-server");
const server = jsonServer.create(); // Aquí se define la variable correctamente
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // Definir el puerto correctamente
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
