var mongoose=require('mongoose');
var blog=mongoose.Schema({
Title:{
    type:String,
    require:true
},
Author:{
    type:String,
    require:true
},
h1:{
    type:String,
    default:"-"
},
h2:{
    type:String,
    default:"-"

},
h3:{
    type:String,
    default:"-"

},
sh11:{
    type:String,
    default:"-"

},
sh12:{
    type:String,
    default:"-"

},
sh13:{
    type:String,
    default:"-"

},
sh21:{
    type:String,
    default:"-"

},
sh22:{
    type:String,
    default:"-"

},
sh23:{
    type:String,
    default:"-"

},
sh24:{
    type:String,
    default:"-"

},
sh31:{
    type:String,
    default:"-"

},
sh32:{
    type:String,
    default:"-"

},
sh33:{
    type:String,
    default:"-"

},
sh34:{
    type:String,
    default:"-"

},
c1:{
    type:String,
    require:true

},
c2:{
    type:String,
    default:"-"

},
c3:{
    type:String,
    default:"-"

},
c4:{
    type:String,
    default:"-"

},
c5:{
    type:String,
    default:"-"

},
c6:{
    type:String,
    default:"-"

},
c7:{
    type:String,
    default:"-"

},
c8:{
    type:String,
    default:"-"

},
Name:{
    type:String,
    require:true
   },
Extension:{
   type:String,
   require:true
}
});
module.exports=mongoose.model('Blog',blog)