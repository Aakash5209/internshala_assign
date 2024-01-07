const mongoose =require("mongoose")

const connectToDb = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/tempDb')
    
    mongoose.connection.on('connected',()=>{
        console.log('db connected')
    
    })
}    
module.exports= connectToDb;

//if u want to use .then or .catch then -
// mongoose.connect("mongodb://localhost://27017//movieData").then(()=>{ console.log("connected")})
// .catch((err)=>{console.log(err)});