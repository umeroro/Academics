const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://barterweb:barterweb@cluster0.ukaok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

async function mongoConnect(){
    try {
        await client.connect();
        console.log('Database is Connected');
        return client.db('mern db');
    } catch (error) {
        return console.log(error);
    }
}

mongoConnect();