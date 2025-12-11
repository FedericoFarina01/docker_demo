const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send("App básica en NodeJs")
})


app.listen(3000, () => {
  console.log(`Servidor corriendo en puerto 3000`);
});