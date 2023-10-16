let express = require("express");
let userRoute = express.Router();
const userDataModel = require("../data-model/userDataModel copy");

//Login
userRoute.post("/login", async (req, res) => {

    const { userName, password } = req.body;
    
    userDataModel.findOne({userName, password}).then((existingUser)=>{
        if(existingUser) {
            return res.send(existingUser);
        } else {
            return res.status(404).json({ message: "Invalid userName or password!" });
         }
     }).catch((err)=> {
        console.log("Error while login ", err);
         return res.send("Server Error");
    });

});


//Sign up
userRoute.post("/signup", (req, res)=> {
    const { userName, password, firstName, lastName, email, address }= req.body;
    if (!userName) {
        res.send("User Name is Empty!");
    }
    if (!password) {
        res.send("Empty Password is Empty!");
    }
    if (!firstName) {
        res.send("First Name is Empty!");
    }
    if (!lastName) {
        res.send("Last Name is Empty!");
    }
    if (!email) {
        res.send("Email is Empty!");
    }
    if (!address) {
        res.send("Address is is Empty!");
    }
    userDataModel.findOne({userName}).then((existingUser)=>{
        if(!existingUser) {
            const user = new userDataModel({
                userName,
                password,
                firstName,
                lastName,
                email,
                address,
            });
            user.save().then((newUser)=>{
                res.send(newUser);
            }).catch((err1)=>{
                console.log("Error signup", err1);
                res.send("Error while Sign up");
            })
        }
    }).catch((err)=> {
        console.log("Error while signup ", err);
        res.send("Existing User");
    });

})

module.exports = userRoute;