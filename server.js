
require('dotenv').config({path:'./config.env'});
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`I am listening at port http://localhost:${PORT}`);
})