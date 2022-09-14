var mongoose=require('mongoose');
var auth=mongoose.Schema({
Username:{
    type:String,
    require:true
},
Password:{
    type:String,
    require:true
}
});
module.exports=mongoose.model('auth',auth)