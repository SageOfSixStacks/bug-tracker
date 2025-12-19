import Bug from "../model/bug.model.js"

export const createBug = async (req, res) => {
    try {
        const {title, description, status} = req.body;
        const bug = await Bug.create({title, description, status: Date.now()});
        res.status(201).json({message: "Issue Submitted Successfully", data: bug});
    } catch (error) {
        console.log("Error creating Bug", error);
        return res.statuss(500).json({message: "Internal Server error"})
    }
}

export const getAllbugs = async (req, res) => {
    try {
        const bugs = await Bug.find();
        if (!bugs) {
            return res.status(404).json({message: "No bugs founds"})
        }
        res.status(200).json({message: "Issues Retrieved Successfully", data: bugs});
    } catch (error) {
        console.log("Error Getting Bugs", error);
        return res.statuss(500).json({message: "Internal Server error"})
    }
}

export const getBug = async (req, res) => {
    try {
        const {id} = req.params;
        const bug = await Bug.findById({_id: id});
        if (!bug) {
            return res.status(404).json({message: "No bug founds"});
        }
        res.status(200).json({message: "Issue Retrieved Successfully", data: bug});
    } catch (error) {
        console.log("Error getting Bug", error);
        return res.status(500).json({message: "Internal Server error"})
    }
}

export const updateBug = async (req, res) => {
    try {
        const {title, description, status} = req.body;
        const {id} = req.params;
        const bug = Bug.findByIdAndUpdated({_id: id}, {$set: {title, description, status}}, {new: true, runValidator: true});
    } catch (error) {
        console.log("Error updating Bug", error);
        return res.statuss(500).json({message: "Internal Server error"})
    }
}

export const deleteBug = async (req, res) => {
    try {
        const {id} = req.params;
        res.send("Delete Bug Route")
    } catch (error) {
        console.log("Error deleting Bug", error);
        return res.statuss(500).json({message: "Internal Server error"})
    }
}