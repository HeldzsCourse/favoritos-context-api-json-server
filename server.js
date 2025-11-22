const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(require('./db.json')); // Alterado para objeto em memória
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Configuração necessária para Vercel (exportar) e Local (listen)
if (require.main === module) {
  const port = process.env.PORT || 3500;
  server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });
}

module.exports = server;
