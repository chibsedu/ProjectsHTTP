const express = require('express')
const path = require('path')
const PORT = 3000

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    // res.send('Hello from Express');
    // res.send(req.header('host'));
    res.send(req.rawHeaders);
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
