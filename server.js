const express = require('express')
const Weather = require('./weather')

const server = express()

const PORT = 80

server.get('/:locationCode', (req, res) => {
    if (req.params.locationCode) {
        Weather.get(req.params.locationCode).then(result => res.send(result))
    } else {
        res.send(400)
    }
})

server.listen(PORT)

console.log('Running on http://localhost:' + PORT)