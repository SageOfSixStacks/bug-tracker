import app from "./app.js"
import connectDB from "./config/db.js"

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const start = async () => {
    try {
        await connectDB(MONGO_URL);
        app.listen(PORT, () => {console.log(`Server listening on PORT: ${PORT}`)})
    } catch (error) {
        console.log("Error starting server", error);
    }
}

start();