//Importar el modulo HTTP
const { error } = require('console');
const http = require('http');

const fs = require('fs').promises;

//Definir el puerto en el que se ejecutara el servidor
const PORT = 3000;

//Crear el servidor
const servidor = http.createServer((req, res) => {
    //lectura asincrona: no bloquea el evento loop
    fs.readFile('./index.html', 'utf8')
    .then(
        data =>
        { console.log('Ejecucion con exito', data) }
    )
    .catch(
        err =>
        { console.log ('Error en el archivo:', err) }

    );
    
});



//Iniciar el servidor
servidor.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);

});