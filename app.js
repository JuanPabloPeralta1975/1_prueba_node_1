const express = require ('express');
const app = express();
app.listen (3000, () =>{console.log('servidor corriendo')});
app.get('/',function(req,res){res.send('Bienvenidos al sitio')});

//para instalar express en terminal npm init
//tambien instalar npm install express --save
// para ejecutar en consola node app.js
// en la web escribir localhost:3000