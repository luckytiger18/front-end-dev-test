const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile('./public/index.html');
})

app.listen(port, () => {
    console.log('listening on http://localhost:${port}')
})