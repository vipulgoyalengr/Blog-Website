var mongoose=require('mongoose');
var contact=mongoose.Schema({
Name:{
    type:String,
    require:true
},
Email:{
    type:String,
    require:true
},
Subject:{
    type:String,
    require:true
},
Telephone:{
    type:String,
    require:true
},
Message:{
    type:String,
    require:true
}
});
module.exports=mongoose.model('Contact',contact)