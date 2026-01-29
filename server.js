//Importar el modulo HTTP
const http = require('http');

//Definir el puerto en el que se ejecutara el servidor
const PORT = 3000;

//Crear el servidor
const servidor = http.createServer((req, res) => {

//Manejo de diferentes rutas
    if(req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Pagina de principal.</h1>');
    } 
    else if(req.url === '/acerca'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<p>Esta es la pagina de acerca de.</p>');
    }
    else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Pagina no encontrada.</h1>');
    }
});

//Iniciar el servidor
servidor.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);

});