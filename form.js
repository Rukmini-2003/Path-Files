//import express from express;
const express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/form.html',function(req,res){
    res.sendFile(__dirname + "/" + "form.html" );
})
app.get('/process_get',function(req,res){
    var response={
        First_name:req.query.fname,
        Last_name:req.query.lname
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server=app.listen(8000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening at http://%s%s",host,port)
})
