const { MongoClient } = require("mongodb");
let dbConnection
module.exports = {
    connectToDb :  (cb) => {
        MongoClient.connect('mongodb+srv://shivani:hiimickey123@cluster0.lbj1wsi.mongodb.net/bookstore')
        .then((client)=>{
            dbConnection = client.db()
            return cb()
        })
        .catch((err)=>{
            console.log("error occured" , err);
            return cb(err)
        })
        
    },
    getDb : () => dbConnection
    
}