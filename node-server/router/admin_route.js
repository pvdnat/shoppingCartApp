const express = require('express')

const router = express.Router()//({caseSensitive: true})

router.get('/hello',(req, res)=>{
  res.send(`<h1>Hello From Admin</h1>`)
})

router.get('/router',(req, res)=>{
    res.send('<h3> Express Router helps removing the burden of route table from main application!!! </h3>')
})

module.exports = router;