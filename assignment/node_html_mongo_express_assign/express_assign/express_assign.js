const express = require('express');
const app = express();

//in node js - res.end() but in express res.send() is used to send the response to the server

app.get('/home/:name', (req, res) => {
    //here req.params is returning the object so we are doing object desturcturing
    const { name } = req.params.value;
    //here we are using ecma 6 template literal
    res.send(`Hello, ${name}!`);
  });

//now lsiten the req at spcific port
app.listen(8000,()=>{
    console.log('listening')
})

// here in route forward slash "/" respresent the home page