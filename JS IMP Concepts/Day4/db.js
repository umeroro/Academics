const {MongoClient} = require('mongodb');

const uri = 'mongodb+srv://barterweb:barterweb@cluster0.ukaok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

async function connectdb(){
    try {
        await client.connect();
        console.log('server is connected');
        return client.db('Mern_db');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;