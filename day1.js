const express = require('express')
const app = express()
PORT = 3000
app.use(express.urlencoded({extended: true}));

let users = ["Ram","Shyam"]

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/add-user',(req,res)=>{
    if(req.body.name){
        users.push(req.body.name)
        res.send("users Added")
    }else{
        res.send("please provide name")
    }
})
app.get('/delete-user',(req,res)=>{
    if(req.query.name)
    {
        users = users.filter((user)=>{
            return user !== req.query.name
        });
        res.send("user Deleted");
    }
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})