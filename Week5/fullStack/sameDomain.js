const express=require("express");

const app=express();
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(__dirname+"/fullWorking.html")
});
app.post("/sum",function(req,res){
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);

    res.json({
        ans:a+b
     });
});

app.listen(3000);