import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.DB_URI);

let conn;
const connectDb = async () => {
    try{
        conn = await client.connect()
        console.log("Database is connected")
    } catch (e) {
        console.error(e)
    }
}

await connectDb();

let sampleData = conn.db("sample_training");
export {sampleData}

