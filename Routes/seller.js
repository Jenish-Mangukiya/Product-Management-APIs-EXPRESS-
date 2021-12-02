const express = require("express");
const router = express.Router();
router.use(express.json());
const sellerDetails = require("../sellerDetails")

router.get('/api/sellerDetails',(req,res) => {
    res.json(sellerDetails)
})
router.post('/api/sellerDetails',(req,res) => {
    if (!req.body.productid) {
        res.status(400)
        return res.json({error : "Productid is require"})    
    }
    const user ={
        id : sellerDetails.length + 1,
        name : req.body.name,
        productid : req.body.productid,
    }
    sellerDetails.push(user)
    res.json(user);
})
router.put('/api/sellerDetails/:id', (req ,res) => {
    let id = req.params.id
    let name = req.body.name
    let productid = req.body.productid

    let index = sellerDetails.findIndex((product) => {
        return(product.id == Number.parseInt(id))
    })
    if(index >= 0){
        let std = sellerDetails[index]
        std.name = name,
        std.productid = productid,
        res.json(std)
    } else {
        res.status(404)
        res.end()
    }

})
router.delete("/api/sellerDetails/:id" , (req ,res) => {
    let id = req.params.id;
    let index = sellerDetails.findIndex((product) => {
        return(product.id == Number.parseInt(id))
    })
    if(index >= 0){
        let std = sellerDetails[index]
        sellerDetails.splice(index, 1)
        res.json(std)
    } else {
        res.status(404)
    }
})

module.exports = router;