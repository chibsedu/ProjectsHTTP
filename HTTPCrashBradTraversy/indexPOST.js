const express = require('express')
const path = require('path')
const PORT = 3000

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.get('/', (req, res) => {
    // res.send({ msg: 'Hello'});
    // res.send(req.header('user-agent'));
    //res.send(req.rawHeaders);
//});


// app.post('/contact', (req, res) => {        // To synchro in Postman. We send data => POST.
//     res.send(req.body);                     //
//     // res.send(req.header('Content-Type'));
// });


app.post('/contact', (req, res) => {
    if(!req.body.name){
        return res.status(400).send('Name is required');
    }
    // DO DATABASE STUFF
    res.status(201).send(`Thank you ${ req.body.name} `);
});

app.post('/login', (req, res) => {
    if(!req.header('x-auth-token')){
        return res.status(400).send('No Token');
    }
    if(req.header('x-auth-token') !== '123456'){
        return res.status(401).send('Not Authorized');
    }
    res.send('Logged in');

});



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
