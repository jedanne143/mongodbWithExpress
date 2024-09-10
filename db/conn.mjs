import { MongoClient } from "mongodb"
import dotenv from "dotenv";
dotenv.config();


const client = new MongoClient(process.env.DB_URI);

let conn;
const connectDb = async () => {
    try{
        conn = await client.connect()
    } catch (e) {
        console.error(e)
    }
}

await connectDb();

let db = conn.db("sample_training");
export default db

