const express = require('express')
const app = express()
const port = 3085
const setUpDb = require('./configure/database')
const router = require('./configure/route')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/',router)


setUpDb()

app.listen(port,()=>{
    console.log('listening on port ',port)
})