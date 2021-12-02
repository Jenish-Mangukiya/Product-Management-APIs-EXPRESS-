const express = require("express");
const router = express.Router();
router.use(express.json());
const productDetails = require("../productDetails")

router.get('/api/productDetails',(req,res) => {
    res.json(productDetails)
})
router.post('/api/productDetails',(req,res) => {
    if (!req.body.sellerid) {
        res.status(400)
        return res.json({error : "Sellerid is require"})    
    }
    const user ={
        id : productDetails.length + 1,
        ptitle : req.body.ptitle,
        price : req.body.price,
        categoryid : req.body.categoryid,
        companyid : req.body.companyid,
        sellerid : req.body.sellerid
    }
    productDetails.push(user)
    res.json(user);
})
router.put('/api/productDetails/:id', (req ,res) => {
    let id = req.params.id
    let ptitle = req.body.ptitle
    let price = req.body.price
    let categoryid = req.body.categoryid
    let companyid = req.body.companyid
    let sellerid = req.body.sellerid

    let index = productDetails.findIndex((product) => {
        return(product.id == Number.parseInt(id))
    })
    if(index >= 0){
        let std = productDetails[index]
        std.ptitle = ptitle,
        std.price = price,
        std.categoryid = categoryid,
        std.companyid =companyid,
        std.sellerid =sellerid
        res.json(std)
    } else {
        res.status(404)
        res.end()
    }

})
router.delete("/api/productDetails/:id" , (req ,res) => {
    let id = req.params.id;
    let index = productDetails.findIndex((product) => {
        return(product.id == Number.parseInt(id))
    })
    if(index >= 0){
        let std = productDetails[index]
        productDetails.splice(index, 1)
        res.json(std)
    } else {
        res.status(404)
    }
})

module.exports = router;