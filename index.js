const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('CALCULADORA!'));

app.listen(5050, () => console.log('Example app listening on port 5050!'));

app.get('/suma', function (req, res) {
    if(!req.query.a&!req.query.b){
        res.send('Faltan parametros');
    } else{
        res.send('El resultado de la suma: ' + a + b);
        var {a, b} = req.query;
    }
    res.send('SUMA');
  });