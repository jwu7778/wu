var mysql = require('mysql');
var express=require('express');
var cookie=require('cookie-parser');
var bodyParser = require('body-parser');
var port=3000;


var app=express();

app.use(express.static('public'));
app.listen(port);
var con = mysql.createConnection({
    host:'localhost',
    user:'user',
    password:'1234',
    database:'assignment'
  });
  
  con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
  });



  
app.get('/home',function(req,res){
    res.redirect('/home.html');
})
app.get('/reg',function(req,res){
  
  var email=req.query.email;
  var password=req.query.password;
  var data={
    email:email,
    password:password
  }
  var t=con.query('SELECT  FROM `user` WHERE `email`==email');
if(t==NULL){
  con.query('INSERT INTO `user` SET ?', data);
  res.redirect('/member.html');
}else{
  res.send("此信箱已註冊")
}
  
})
app.get('/login',function(req,res){
 
  var email=req.query.email;
  var password=req.query.password;
  var data={
    email:email,
    password:password
  }
  var t=con.query('SELECT  FROM `user` WHERE `email`=email AND `password`=password' );
if(t==NULL){
  res.send("登入錯誤")
}else{
  res.redirect('/member.html');
}
})

