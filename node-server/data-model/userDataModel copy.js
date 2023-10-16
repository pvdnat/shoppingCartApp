let mongooseObj = require("mongoose");
const schemaObj = mongooseObj.Schema; 
mongooseObj.connect("mongodb://127.0.0.1/shoppingCart"); 

let userSchema = new schemaObj({
    userName : {type: String, required : true},
    password: {type:String, required : true},
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    email: {type:String, required : true},
    address: {type:String, required : true},
});

let UserModel = mongooseObj.model("user", userSchema);
module.exports = UserModel;