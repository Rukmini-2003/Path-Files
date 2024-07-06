//import express from 'express';
const express=require('express');
//import code from 'qrcode';
const code =require('qrcode');
const app=express();
const port =5000;
app.get('/qrcode',(req,res)=>
{
    const url='https://jbtechsolutions.github.io/Home/';
    code.toDataURL(url,(err,qrcodeUrl)=>{
        if(err)
        {
            res.status(500).send('Internal  server Error');
        }
        else {
            res.send(`
                <!DOCTYPE HTML>
                <html>
                   <head>
                    <title>QR code Generator</title>
                   </head>
                   <body>
                      <h1> QR code</h1>
                     <img src="${qrcodeUrl}"alt="QR code">
                    <p> SCan the qr code to visit website</p> 
                   </body>
                </html>
            `)
        }
    });
});
app.listen(port,()=>
{
    console.log(`server is running on port ${port}`);
});