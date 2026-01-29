//Importar el modulo HTTP
const http = require('http');

//Definir el puerto en el que se ejecutara el servidor
const PORT = 3000;

//Crear el servidor
const servidor = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola desde el servidor Node.js!');

});

//Iniciar el servidor
servidor.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});