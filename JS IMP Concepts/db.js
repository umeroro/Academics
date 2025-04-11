const {MongoClient} = require('mongoo');
const uri = 'mongodb+srv://barterweb:barterweb@cluster0.ukaok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri)

async function connectMongo() {
    try {
        await client.connect();
    }
}