const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://barterweb:barterweb@cluster0.ukaok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("mern_db");
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

module.exports = connectDB;
