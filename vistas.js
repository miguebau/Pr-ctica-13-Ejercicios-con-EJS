app.post('/par-impar', (req, res) => {
    const numero = req.body.numero;
    let leyenda;
    if (numero % 2 === 0) {
        leyenda = 'par';
    } else {
        leyenda = 'impar';
    }
    res.render('par-impar', { numero, leyenda });
});