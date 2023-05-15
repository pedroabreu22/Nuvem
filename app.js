var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var port = 3001;

//iniciando o processo do servidor
app.listen(port, function () {
    console.log(`App está rodandando no http://localhost:${port}/`);
});



app.get('/', function (req, res) {
    res.send('Oi mundo ^-^');
});


app.get('/', (req, res) => {
    const html = '<html><body><h1>Olá, mundo!</h1></body></html>';
    res.send(html);
});



function soma(a, b) {
    return a + b;
}

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);

    res.send(`A soma de ${body.a} e ${body.b} é ${resultado}`);
});

function subtracao(a, b) {
    return a - b;
}

app.post('/subtrair', function (req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);

    res.send(`A subtração de ${body.a} e ${body.b} é ${resultado}`);
});

function divisao(a, b) {
    return a / b;
}

app.post('/divisao', function (req, res) {
    var body = req.body;
    var resultado = divisao(body.a, body.b);

    res.send(`A divisão de ${body.a} por ${body.b} é ${resultado}`);
});

function multiplicacao(a, b) {
    return a * b;
}

app.post('/multiplicar', function (req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);

    res.send(`A multiplicação de ${body.a} por ${body.b} é ${resultado}`);
});