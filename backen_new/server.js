const http = require('http')
var mongoose=require('mongoose')
const jwt = require('jsonwebtoken')
var contact=require('./models/contus')
var event=require('./models/add_event')
const auth=require('./models/auth')
var cors = require('cors')
let path = require('path')
var blog=require('./models/blogs')
var news=require('./models/news')
const checkauth=require('./models/check-auth')
const express=require('express')
const bcrypt=require('bcryptjs')
const fs=require('fs');
const route=require('./routes/route')
var app=express()
mongoose.Promise=global.Promise;
var cb=function(err) {
    if(!err){

        console.log("connection opened");
    }
    else{
        console.log(err)
        console.log("connection failed");
    }
};
// mongoose.connect("mongodb+srv://lex:HnpLEJ18R7kYaPMB@cluster0-td8xs.mongodb.net/<dbname>?w=majority",{ useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex:true})
// .then(()=>{
// console.log("Connected to Databases ")
// }).catch(()=>{
//     console.log("connection failed")
// });
// Sl44oT6JPhZZz13z
mongoose.connect(mongo_db_URL,{ useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex:true})
.then(()=>{
console.log("Connected to Databases ")
}).catch(()=>{
    console.log("connection failed")
});

// mongoose.connect("mongodb://localhost:27017/mongotube",{ useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex:true},cb);

// mongoose.connection;
var bodyParser=require('body-parser')
const { post } = require('request')
// const employeeRoute = require('../backend/routes/employee.route')

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb',extended:true}))
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods",'PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader("Access-Control-Allow-Headers","Origin,X-auth,X-Requested-With,Content-Type,Accept,Authorization");
    next();
});
app.use(cors()); 
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'dist/lawsite')));
app.use('/',express.static(path.join(__dirname, 'dist/lawsite')));
// app.use(sendSpaFileIfUnmatched);
app.use('/api',route)
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/lawsite/index.html'));
})



port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
