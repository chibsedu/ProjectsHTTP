const express = require('express')
const path = require('path')
const PORT = 3000

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
