const express = require('express') //importing the express module reference
const app = express() //instantiating express top method which returns application 

//we can use multiple express applications by mounting them on main app
const adminRoute = require("../router/admin_route")
const adminApp = express();

console.log("We are in server.js")

// 4-Major pillars of express 
// 1. Application
// 2. Request
// 3. Response
// 4. Router

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert.js

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/html', function (req, res) {
  res.send('<h1>Welcome to MERNSTack session</h1>')
})

app.get('/file', function (req, res) {
  res.sendFile(__dirname+"/public/index.html")
})

// app.get('/alert.js', function (req, res) {
//   res.sendFile(__dirname+"/alert.js")
// })

// query param
app.get('/queryparam', function (req, res) {
  let query = req.query["name"]

  res.send(`This is the name sent in queery ${query}`)
})

// route param :/name - of the param //http://localhost:9000/routeprm/Jeffery/info
app.get('/routeprm/:name/info', function (req, res) {
  let routeParam = req.params["name"]

  res.send(`This is the name sent in Route param ${routeParam}`)
})

app.get('/hello', function (req, res) {
    console.log(req.headers) 
  
  let deviceType = req.headers['user-agent']
  console.log(deviceType) 
  if (deviceType.indexOf("Android") >= 0) {
      res.json({
        "Device":"Mobile",
        "Status" : 102,
        "Message" : "Please switch off during session!!!"
    })
  } else {
    res.json({
      "Name":"Jason",
      "Status" : 2000,
      "Session" : "MERNStack"
  }) 
  }
   
})

//redirect all request with /admin path to adminApp
app.use('/admin',adminApp)

//mounted admin app
adminApp.use('/',adminRoute)
// adminApp.get('/hello',(req, res)=>{
//   res.send(`<h1>Hello From Admin</h1>`)
// })



//wild card operator / default api
// app.get('*',(req, res)=>{
//   res.send('<h2>API you"re looking for is not ready yet!!! <h2>')
// })
console.log("We are listening at 9000")

//open the port for api to start listening the request/web-request
app.listen(9000) //localhost:9000



//nodemon - node monitoring module, which listens to change and restarts api when needed


//HTTP Standard Status Codes

//200 - Everything is okay and we'll response (200.1) - success
//304 - Permanent Re-routing - The page we are looking is moved /page1 now /page2
//404 - page not found
//500 - error on application