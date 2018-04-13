const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('CALCULADORA!'));

app.listen(5050, () => console.log('Example app listening on port 5050!'));

//sumar
app.get('/suma', function (req, res) {

    if (Object.keys(req.query).length === 0) {
        console.log("no hay nada");
        res.send('No hay nada');
    } else if (Object.keys(req.query).length === 2) {
        var {
            a,
            b
        } = req.query;
        console.log(a + b);
        console.log(req.query);
        res.send('El resultado de la suma es: ' + parseInt(a) + parseInt(b));
    }

});

//resta
app.get('/resta', function (req, res) {

    if (Object.keys(req.query).length === 0) {
        console.log("no hay nada");
        res.send('No hay nada');
    } else if (Object.keys(req.query).length === 2) {
        var {
            a,
            b
        } = req.query;
        console.log(a - b);
        console.log(req.query);
        res.send('El resultado de la resta es: ' + (parseInt(a) - parseInt(b)));
    }

});

//multiplicación
app.get('/multiplicacion', function (req, res) {

    if (Object.keys(req.query).length === 0) {
        console.log("no hay nada");
        res.send('No hay nada');
    } else if (Object.keys(req.query).length === 2) {
        var {
            a,
            b
        } = req.query;
        console.log(a * b);
        console.log(req.query);
        res.send('El resultado de la multiplicación es: ' + (parseInt(a) * parseInt(b)));
    }

});

//division
app.get('/division', function (req, res) {

    if (Object.keys(req.query).length === 0) {
        console.log("no hay nada");
        res.send('No hay nada');
    } else if (Object.keys(req.query).length === 2) {
        var {
            a,
            b
        } = req.query;
        console.log(a / b);
        console.log(req.query);
        res.send('El resultado de la división es: ' + (parseInt(a) / parseInt(b)));
    }

});