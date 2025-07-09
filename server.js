const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('App déployée avec succès !je suis en demo');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Serveur lancé sur le port ' + PORT);
});
