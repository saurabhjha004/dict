const express = require('express');
const app =express();
require('./data');


app.get('/', (req, res)=>{
    res.send("hello mongo");
});

app.get('/api', (req, res)=>{
    res.send("hello api");
});

app.get('/api/:name', (req, res)=>{
    const { name } = req.params;
    res.send("hello ${name}");
});

app.listen(5000, ()=>{
    console.log("app is running");
});