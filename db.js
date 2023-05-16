const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;  
const ObjectID = mongodb.ObjectId;
 let database;

async function getDatabase(){
    const client = await MongoClient.connect('mongodb://0.0.0.0:27017')
    database = client.db('library')
    if (!database) {
        console.log('database not connected');

    }
    return database;
}
module.exports = {
    getDatabase,
    ObjectID
}