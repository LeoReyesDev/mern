var Mongoose = require("mongoose");

var dbURI='mongodb://usermovie:Maximus_2017@ds035607.mlab.com:35607/moviepersons';


Mongoose.connect(dbURI,function(err){    
    if(err){
    console.log('Some problem with the connection ' +err)   
    } 
    else {
    console.log('The Mongoose connection is ready')  
    }

})
module.exports={Mongoose};