const express=require("express");
const req = require("express/lib/request");
const app=express();


app.get("/Books",allBooks("Admin"),(req,res)=>{
    return res.send({role:req.role});
})

app.get("/Books1",allBooks("user"),(req,res)=>{
    return res.send({role:req.role});
})

app.get("/Books2",allBooks("reader"),(req,res)=>{
    return res.send({role:req.role});
})



function allBooks(admin){
    return function book(req,res,next){
        if(req.path==="/Books"){
            req.role="Fetching All Books";
            console.log("Fetching All Books")
            next()
        }
        else{
            req.role="Something Wrong"
            next()
        }
    }
   
}

app.listen(5555,()=>{
    console.log("listening on port 5555");
})

