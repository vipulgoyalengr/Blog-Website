const http = require('http')
var mongoose=require('mongoose')
const jwt = require('jsonwebtoken')
var contact=require('../lawsite/e2e/backend/models/contus')
var event=require('../lawsite/e2e/backend/models/add_event')
const auth=require('../lawsite/e2e/backend/models/auth')
var blog=require('../lawsite/e2e/backend/models/blogs')
const checkauth=require('../lawsite/e2e/backend/models/check-auth')
const express=require('express')
const bcrypt=require('bcryptjs')
const fs=require('fs');

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
mongoose.connect("mongodb+srv://lex:HnpLEJ18R7kYaPMB@cluster0-td8xs.mongodb.net/<dbname>?retryWrites=true&w=majority")
.then(()=>{
console.log("Connected to Databases ")
}).catch(()=>{
    console.log("connection failed")
});
// mongoose.connect("mongodb://localhost:27017/mongotube",{ useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex:true},cb);

// mongoose.connection;
var bodyParser=require('body-parser')

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb',extended:true}))
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods",'PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader("Access-Control-Allow-Headers","Origin,X-auth,X-Requested-With,Content-Type,Accept,Authorization");
    next();
});
app.use(bodyParser.json({limit: '50mb'}));

app.post('/getimage',(req,res)=>{
    let path='../lawsite/e2e/backend/image/'+ req.body.img+'.'+req.body.ext;
    fs.readFile(path,'base64',(err,buffer)=>{
        let image = buffer.toString('base64');
        let result={"image":image};
        res.send(result);
    });
    });

app.post('/image',(req,res)=>{
    let buffer = new Buffer.from(req.body.image,'base64');
    // console.log(req.body.imagepath);
    fs.writeFile('../lawsite/e2e/backend/image/'+req.body.imagepath+'.'+req.body.ext,buffer, function(err,re){
        if(err){console.log(err);
            res.send("error");}
        else{
            res.status(200).send(re);
        }
    })
    });

    // app.post('/image1',(req,res)=>{
    //     // console.log(req.body);
    //     var data=new blog(req.body);
    //     data.save().then((result)=>{
    //         res.send(result);
    //     }).catch((err)=>{
    //         res.send(err);
    //     });
    //     });

// app.use('/fin',(req,res)=>{
//     console.log('hello')
//     const post=[
//         {
//             id:'1234'
//         }
//     ];
//     res.send(post)
// });
app.post('/cont',(req,res)=>{
var cont= new contact(req.body);
cont.save().then((result)=>{
    console.log('done!')
    res.send(result);

}).catch((err)=>{
    res.send(err);
});
});


app.post('/signin',(req,res)=>{
    bcrypt.hash(req.body.Password,10).then(hash=>{
        const signin = new auth({
            Username:req.body.Username,
            Password:hash
        });
    
    signin.save().then((result)=>{
        console.log('done!')
        res.send(result);
    
    }).catch((err)=>{
        res.send(err);
    });
});
    });


app.post('/login',(req,res)=>{
    let fetchedUser;
auth.findOne({Username:req.body.Username}).then(user=>{
    
if (!user){
    return res.status(401)
}
fetchedUser=user;
return bcrypt.compare(req.body.Password,user.Password)
})
.then(result=>{
    
    if(!result){
        return res.status(401)

    }
    const token=jwt.sign(
        {Username:fetchedUser.Username,userId:fetchedUser._id},
        "secret_this_should_be_longer",
        {expiresIn:"1h"}
        );
        console.log(token)
        res.status(200).json({token:token,expiresIn:3600});
})
.catch(err=>{
    console.log(err)
    return res.status(401)

})
});

app.post('/posts',(req,res)=>{
    var cont= new blog(req.body);
    cont.save().then((result)=>{
        console.log('done!')
        res.send(result);
    
    }).catch((err)=>{
        res.send(err);
    });
    });


app.get('/get_blog',(req,res)=>{
blog.find().limit(3).then((result)=>{
console.log(result)
res.send(result)
});
});

app.get('/get_len',(req,res)=>{
    blog.find().then((result)=>{
    res.send(result)
    });
    });

    app.get('/get_events',(req,res)=>{
        event.find().limit(3).then((result)=>{
        console.log(result)
        res.send(result)
        });
        });
app.get('/get_blogs',(req,res)=>{
    const currentpage=req.query.page
    console.log(currentpage)
    blog.find().skip(3*(currentpage-1)).limit(3).then((result)=>{
    console.log(result)
    res.send(result)
    });


    });
    app.post('/events',(req,res)=>{
        var events= new event(req.body);
        events.save().then((result)=>{
            console.log('done!')
            res.send(result);
        
        }).catch((err)=>{
            res.send(err);
        });
        });

port=process.env.PORT || 3000;
app.listen(port,(res)=>{
    console.log(`listening on port ${port}`)
})
