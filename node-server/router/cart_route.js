let express = require("express");
let router = express.Router({}),
CartDataModel = require("../data-model/cartDataModel");

//cart api's
router.post("/api/saveUserCart",(req, res)=>{

    CartDataModel.findOne({userid: req.body.userid})
        .then((cartDbObj) => {        
                if (!cartDbObj) { //checks for null cart of given user
                        console.log("No cartitems Present, Adding / Inserting!"); 
                        let cartObj = new CartDataModel(req.body);

                        cartObj.save().then((data)=>{                                  
                            res.json(data);
                        }).catch((err)=>{
                            res.send("Error Occurred"+ err);
                        });
                }
                else{ //update the cart for given user
                    console.log("CartItems Present, Replacing / Updating!");
                    cartDbObj.cart = req.body.cart;//replacing db cart with cart that user has sent from cartcomponent page
                    
                    cartDbObj.save()
                    .then((data)=>{        
                         setTimeout(()=>{
                            res.json(data);
                        },3000)                        
                    })
                    .catch((err)=>{
                        res.send("Error Occurred"+ err);
                    })
                }
  })
  .catch((err)=>{
        console.log("got an error!", err);            
        res.send("error while fetching cart!");
  });

});

router.post("/api/getUserCart",(req, res)=>{
    CartDataModel.findOne({userid: req.body.userid})
        .then((cart) => { res.json(cart) })
        .catch((err)=>{res.send("Error Occurred"+ err);})
});

module.exports = router;

//in future need to put this datamodel in user itself, so that we can have best use of mongodb