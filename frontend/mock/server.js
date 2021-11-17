// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("mock/db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = new Date().toJSON();
  }
  next();
});

server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running...");
});
