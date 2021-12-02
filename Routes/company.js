const express = require("express");
const router = express.Router();
router.use(express.json());
const companyDetails = require("../companyDetails")

router.get('/api/companyDetails',(req,res) => {
    res.json(companyDetails)
})
router.post('/api/companyDetails',(req,res) => {
    if (!req.body.productid) {
        res.status(400)
        return res.json({error : "Productid is require"})    
    }
    const user ={
        id : companyDetails.length + 1,
        name : req.body.name,
        productid : req.body.productid,
    }
    companyDetails.push(user)
    res.json(user);
})
router.put('/api/companyDetails/:id', (req ,res) => {
    let id = req.params.id
    let name = req.body.name
    let productid = req.body.productid

    let index = companyDetails.findIndex((product) => {
        return(product.id == Number.parseInt(id))
    })
    if(index >= 0){
        let std = companyDetails[index]
        std.name = name,
        std.productid = productid,
        res.json(std)
    } else {
        res.status(404)
        res.end()
    }

})
router.delete("/api/companyDetails/:id" , (req ,res) => {
    let id = req.params.id;
    let index = companyDetails.findIndex((product) => {
        return(product.id == Number.parseInt(id))
    })
    if(index >= 0){
        let std = companyDetails[index]
        companyDetails.splice(index, 1)
        res.json(std)
    } else {
        res.status(404)
    }
})

module.exports = router;