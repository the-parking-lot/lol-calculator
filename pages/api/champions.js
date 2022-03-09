import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("lol-calculator");
  const champions = await db.collection("champion-statistics").find({}).toArray();
  res.json({ status: 200, data: champions });
}