import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

//1.GET route that sends grade data by _id.
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  let collection = await db.collection("grades");
  let query = { _id:new ObjectId(id) };
  let result = await collection.findOne(query);
    console.log(result)
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});



export default router;



//2. GET route that sends all data for a specified student_id.

//3. GET route that sends all data for a specified class_id.

//4. GET route that sends the data for a specified combination of student_id and class_id.

//5. GET route that sends the weighted average score for each class for a student.

//6. GET route that sends the overall weighted average score for a student.

//7. POST route to create new grade documents.
//8. PATCH routes to update the scores array.
//Add a new score.
//Remove a score.

//9. PATCH route to update class_id.
//10. DELETE route to remove a single grade entry.
//11. DELETE route to remove all of a student's entries.
//12. DELETE route to remove all of a class's entries. 
