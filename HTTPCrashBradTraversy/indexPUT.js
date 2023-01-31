const express = require('express')
const path = require('path')
const PORT = 3000

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.put('/apost/:id', (req, res) => {
    // DATABASE STUFF

    res.json({
        id: req.params.id,      // req.params will access the url values;
        title: req.body.title   // req.body will access the form data (or the json data).
    });

});




app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
