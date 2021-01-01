const express = require('express')
const path = require('path')
publicDirectoryPath=path.join(__dirname, '../public')
console.log(__filename)
const app = express()

app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=>{
    res.send("<h2>Hello exp satish,</h2>")
})
app.get('/about',(req, res)=>{
    res.send({
        name: "satish",
        age : 24
        })
})

app.listen(3000,()=>{
    console.log("server up and running")
})