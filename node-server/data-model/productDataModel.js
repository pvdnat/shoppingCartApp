let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose
mongooseObj.connect("mongodb://127.0.0.1/shoppingCart"); 
let ProductSchema = new schemaObj({
    name: {type:String, required:true},
    price: {type:Number},
    description: {type:String},
    rating: {type:String},
    qty: {type: Number, default:1},
    category : {type:String},
    image: {type:String}
    },
    {
        versionKey: false //false - set to false then it wont create in mongodb
    });

let ProductModel = mongooseObj.model("product",ProductSchema);
module.exports = ProductModel;
