const express = require('express') //importing the express module reference
const app = express() //instantiating express top method which returns application 
const cors = require('cors');

//we can use multiple express applications by mounting them on main app
const userRoute = require("./router/user_route")
const userApp = express();

const productRoute = require("./router/product_route")
const productApp = express();

const cartRoute = require("./router/cart_route")
const cartApp = express();

console.log("We are in server.js")

app.use(cors());//middleware to expose api for other users as public
//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert.js

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

//redirect all request with /admin path to userApp
app.use('/user',userApp)
//mounted admin app
userApp.use('/',userRoute)

app.use('/product',productApp)
productApp.use('/', productRoute)

app.use('/cart',cartApp)
cartApp.use('/', cartRoute)

//wild card operator / default api
app.get('*',(req, res)=>{
  res.send('<h2>API you"re looking for is not ready yet!!! <h2>')
})
console.log("We are listening at 9000")

//open the port for api to start listening the request/web-request
app.listen(9999) //localhost:9000



//nodemon - node monitoring module, which listens to change and restarts api when needed


//HTTP Standard Status Codes

//200 - Everything is okay and we'll response (200.1) - success
//304 - Permanent Re-routing - The page we are looking is moved /page1 now /page2
//404 - page not found
//500 - error on application