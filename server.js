const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('App déployée avec succès !');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
