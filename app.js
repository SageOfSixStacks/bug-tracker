import express from "express";
import bugRouter from "./router/bug.route.js";
import notFound from "./middleware/notFound.middleware.js";

const app = express();

app.use(express.json());

app.use("/", bugRouter)

app.use(notFound);


export default app;