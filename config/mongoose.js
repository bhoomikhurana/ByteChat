const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/ByteChat_dev');
mongoose.Promise=global.Promise;
//acquire the connection(to check if it is successful)
const db=mongoose.connection;
//error
db.on('error',function(err){
    console.log('Mongoose default connection error'+err);
});
//up and running then print the message
db.once('connected',function(){
    console.log('Successfully connected to the database');
});
module.exports=db;