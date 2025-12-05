import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("route is live")
});


export default app;