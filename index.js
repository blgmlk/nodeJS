const express = require('express')

var app = express()

app.get('/', (req, res)=>{
    res.send('{"respense": "Bonjour !!"}')
});

app.get('/retour', (req, res)=>{
    res.send('{"respense": "ça fonctionne"}')
});

app.listen(process.env.PORT || 3000)
module.exports = app