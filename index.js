const express = require('express');
const app=express();
app.use(express.json());

const productroute = require('./Routes/product.js')
const companyroute = require('./Routes/company.js')
const sellerroute = require('./Routes/seller.js')

app.use('/',productroute);
app.use('/',companyroute);
app.use('/',sellerroute);

app.listen(1500, () => {
    console.log('Listing On Port 1500`')
})

app.get('/' ,(req, res) => {
    res.json({message : "Api is Working"})
})
