const express = require('express');

const PUERTO = 8080;

const servidor = express();

servidor.get('/', (req,res) => {
    res.send ('Servidor Express');
});


servidor.get('/producto1/:regla', (req,res) => {
    res.send (`<h1>"regla" , "30 cm" , 50 , "www.regla.com" , 1100 , 23 </h1> ${req.params.regla}`);
});

servidor.get('/producto2/:escuadra', (req,res) => {
    res.send (`<h1>"escuadra" , "triangular" , 12, "www.escuadra.com" , 100 , 12 </h1> ${req.params.escuadra}`);
});

servidor.get('/producto3/:lapiz', (req,res) => {
    res.send (`<h1>"lapiz" , "de color" , 11, "www.lapizdecolores.com" , 1200 , 6</h1>${req.params.lapiz}`);
});




servidor.listen(PUERTO, () => {
    console.log(`servidor backend activo en puerto ${PUERTO}`);
});