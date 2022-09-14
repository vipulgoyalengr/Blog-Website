var mongoose=require('mongoose');
var event=mongoose.Schema({
Title:{
    type:String,
    require:true
},
Name:{
    type:String,
    require:true
   },
Extension:{
   type:String,
   require:true
},
Link:{
    type:String,
    require:true
}
});
module.exports=mongoose.model('Event',event)