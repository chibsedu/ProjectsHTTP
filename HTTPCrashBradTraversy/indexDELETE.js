const express = require('express')
const path = require('path')
const PORT = 3000

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.delete('/apost/:id', (req, res) => {
    // DATABASE STUFF

    res.json({ msg: `Post ${req.params.id} deleted` });

});




app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
