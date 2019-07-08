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
    user:'test',
    password:'',
    database:'assignment',
    port: 3306
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
  
  con.query("SELECT * FROM user WHERE user.email = '" + email + "'", function(err, rows, fields) {
    console.log(rows);
      if (rows.length==0){
      con.query('INSERT INTO `user` SET ?', data);
      res.redirect('/member.html');
    }else{
      res.send("此信箱已註冊");
    }
  })
})
app.get('/login',function(req,res){
 
  var email=req.query.email;
  var password=req.query.password;
  

  con.query("SELECT * FROM user WHERE user.email = '" + email+"' AND user.password = '"+password+"'", function(err, rows, fields) {
    if (rows.length==0){
      res.send("帳號密碼錯誤");
    }else{
      res.redirect('/member.html');
    }
  })
 

})
