//Importar el modulo HTTP
const http = require('http');

const fs = require('fs');

//Definir el puerto en el que se ejecutara el servidor
const PORT = 3000;

//Crear el servidor
const servidor = http.createServer((req, res) => {
    //lectura asincrona: no bloquea el evento loop
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error al leer el archivo');
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })
});



//Iniciar el servidor
servidor.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);

});