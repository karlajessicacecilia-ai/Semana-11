// Middleware que registra cada petición:
// método, URL, código de estado y tiempo de respuesta
function logger(req, res, next) {
  const inicio = Date.now();

  res.on('finish', () => {
    const tiempo = Date.now() - inicio;
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} - ${tiempo} ms`);
  });

  next();
}

module.exports = logger;
