var express=require('express');
var cookie=require('cookie-parser');
var bodyParser = require('body-parser');


var app=express();
app.use(cookie());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port=3000;
app.listen(port);
app.use(express.static('public'));

app.get('/getData',function(req,res){
    var query=req.query;
    console.log(query.number);
    var count=parseInt(query.number);
    if(query.number==null){
        return res.send ('Lack of Parameter');
    }
    if(isNaN(count)){
        return res.send('Wrong Parameter');
    }else{
        var ans=(count+1)*count/2;
        let result=ans;
        return res.send(result + '');
    }
})

app.get('/sum.html',function(req,res){
    res.redirect('/sum.html');
})

app.get('/myName',function(req,res){
    if(req.cookies.name!=null){
        res.send(req.cookies.name);
    }else{
        res.redirect('/trackName.html');
    }
})

app.get('/trackName',function(req,res){
    var name=req.query.name;

    res.cookie("name",name, { maxAge:600000});
    console.log(req.cookies);

    res.redirect('/myName');
    
    
})

