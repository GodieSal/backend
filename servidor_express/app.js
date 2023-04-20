const express = require('express');
const fs = require('fs');
const {ProductManager}= require('./productManager');

const app = express();
const port = 8080;

const Pmanager = new ProductManager;
app.get('/productos', async (req,res)=>{

    const obtenerproductos = await Pmanager.cargarElArchivo();
    const limit = req.query.limit;
    if(limit) return res.send(obtenerproductos.slice(0,limit))

    else return res.send(obtenerproductos)


});

app.get('/productos/:id', async (req,res)=>{
    const id = req.query.id;
    const obtenerproductos = await Pmanager.cargarElArchivo();

    res.send(obtenerproductos.find(e =>parseInt(e.id) == parseInt( req.params.id)));
});
app.listen(port, ()=>{
    console.log('El servidor funciona en el puerto' , port );
})