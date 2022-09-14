const express=require("express")
const router=express.Router();
const jwt = require('jsonwebtoken')


var contact=require('../models/contus')
var news=require('../models/news')
var event=require('../models/add_event')
const auth=require('../models/auth')
let path = require('path')
var blog=require('../models/blogs')
const checkauth=require('../models/check-auth')
// const express=require('express')
const bcrypt=require('bcryptjs')
const fs=require('fs');




router.post('/image',(req,res)=>{
    let buffer = new Buffer.from(req.body.image,'base64');
    // console.log(req.body.imagepath);
    fs.writeFile('./image/'+req.body.imagepath+'.'+req.body.ext,buffer, function(err,re){
        if(err){console.log(err);
            console.log("1")
            res.send("error");}
        else{
            res.status(200).send(re);
        }
    })
    });





router.post('/getimage',(req,res)=>{
    let path='./image/'+ req.body.img+'.'+req.body.ext;
    console.log(path)
    fs.readFile(path,'base64',(err,buffer)=>{
        let image = buffer.toString('base64');
        let result={"image":image};
        res.send(result);
    });
    });


// console.log("hello")
    router.get('/get_news',(req,res)=>{
        // console.log('hello96')
        news.find().limit(3).then((result)=>{
        // console.log(result)
        res.send(result)
        });
        });

        router.post('/image1',(req,res)=>{
            // console.log(req.body);
            var data=new blog(req.body);
            data.save().then((result)=>{
                res.send(result);
            }).catch((err)=>{
                res.send(err);
            });
            });

            router.post('/cont',(req,res)=>{
                var cont= new contact(req.body);
                cont.save().then((result)=>{
                    // console.log('done!')
                    res.send(result);
                
                }).catch((err)=>{
                    res.send(err);
                });
                });


                router.post('/signin',(req,res)=>{
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


                    router.post('/login',(req,res)=>{
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
                            // console.log(token)
                            res.status(200).json({token:token,expiresIn:3600});
                    })
                    .catch(err=>{
                        console.log(err)
                        return res.status(401)
                    
                    })
                    });

                    router.post('/posts',(req,res)=>{
                        var cont= new blog(req.body);
                        cont.save().then((result)=>{
                            // console.log('done!')
                            res.send(result);
                        
                        }).catch((err)=>{
                            res.send(err);
                        });
                        });

                        router.post('/get_blog1',(req,res)=>{
                            blog.findOne({Title:req.body.Title}).then((result)=>{
                                if(result.length!=0){
                                    // console.log(result)
                                    res.send(result)  
                                }
                                else{
                                    res.status(202).send("blog not found");  
                                }
                            
                            });
                            });



                            router.post('/get_news1',(req,res)=>{
                                news.findOne({Title:req.body.Title}).then((result)=>{
                                    if(result.length!=0){
                                        // console.log(result)
                                        res.send(result)  
                                    }
                                    else{
                                        res.status(202).send("news not found");  
                                    }
                                
                                });
                                });

                            router.get('/get_len',(req,res)=>{
                                blog.find().then((result)=>{
                                res.send(result)
                                });
                                });
                            
                                router.get('/get_events',(req,res)=>{
                                    console.log("lkj")
                                    event.find().limit(3).then((result)=>{
                                    // console.log(result)
                                    res.send(result)
                                    });
                                    });
                            router.get('/get_blogs',(req,res)=>{
                                const currentpage=req.query.page
                                console.log(currentpage)
                                blog.find().skip(3*(currentpage-1)).limit(3).then((result)=>{
                                // console.log(result)
                                res.send(result)
                                });
                            
                            
                                });

                                router.get('/get_message',(req,res)=>{
                                    contact.find().then((result)=>{
                                    // console.log(result)
                                    res.send(result)
                                    });
                                    });
                            
                            
                                router.post('/events',(req,res)=>{
                                    var events= new event(req.body);
                                    events.save().then((result)=>{
                                        // console.log('done!')
                                        res.send(result);
                                    
                                    }).catch((err)=>{
                                        res.send(err);
                                    });
                                    });

module.exports=router;