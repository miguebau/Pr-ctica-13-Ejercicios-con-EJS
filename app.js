const express = require('express');
const app = express();

app.get('/person/:id', (req, res) => {
  const id = req.params.id; // Obtenemos el valor del parámetro "id"
  // Realizamos acciones con el valor recibido
  res.send(`El ID de la persona es ${id}`);
});

app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));