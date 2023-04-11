const http = require('http');

const PUERTO = 8080;

const servidor = http.createServer((solicitud, respuesta)=> {
    respuesta.end('productos');
});

servidor.listen(PUERTO, () => {
    console.log(`servidor backend activo en puerto ${PUERTO}`);
});