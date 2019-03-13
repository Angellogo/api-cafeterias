const express = require ('express');
const app = express ();
const cors = require ('cors');
const port = 3000;


const cafes = require ('./db');

app.use(cors());

//rutas
app.get('/', (req,res) => res.send (cafes));


//server
app.listen(port,() => console.log (`excuchando el puerto ${port} http://localhost:${port} ...`))