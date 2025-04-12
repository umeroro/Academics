const connectDB = require("./db");

async function run() {
  const db = await connectDB();
  const collection = db.collection("students");

  await collection.insertOne({ name: "Ali", age: 20, progress: 15 });
  console.log("Student inserted!");

  const students = await collection.find().toArray();
  console.log("All students:", students);

  await collection.updateOne({ name: "Ali" }, { $set: { progress: 20 } });
  console.log("Student updated!");

  await collection.deleteOne({ name: "Ali" });
  console.log("Student deleted!");
}

run().catch(console.error);
