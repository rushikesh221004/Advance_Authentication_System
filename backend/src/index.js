import app from "./app.js";
import dotenv from "dotenv";
import connectDb from "./db/db.connect.js";

dotenv.config();

const PORT = process.env.PORT || 4000;


app.listen(PORT, async () => {
    await connectDb();
    console.log(`App listening on port ${PORT}`);
});