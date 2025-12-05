import {Schema, model} from "mongoose";

const BugSchema = new Schema({
    title: String,
    description: String,
    status: {type: String, enum: ["open", "in progress", "closed"], default: "open"},
}, {timeStamp: true});


export default model("Bug", BugSchema);
