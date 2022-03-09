// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://tpl-admin:KSK29gsTfZCHOZeI@champion-database.wdqur.mongodb.net/champion-database?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("champion-statistics");
//   // perform actions on the collection object

//   console.log(collection.find({}).toArray())

//   // client.close();
// });

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("lol-calculator");
  const champions = await db.collection("champion-statistics").find({}).toArray();
  res.json({ status: 200, data: champions });
}