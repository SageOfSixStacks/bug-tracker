
export const createBug = async (req, res) => {
    try {
        res.send("Create Bug Route");
    } catch (error) {
        console.log("Error creating Bug", error);
        return res.statuss(500).json({message: "Internal Server error"})
    }
}

export const getAllbugs = async (req, res) => {
    try {
        res.send("Get all Bugs Route");
    } catch (error) {
        console.log("Error Getting Bugs", error);
        return res.statuss(500).json({message: "Internal Server error"})
    }
}

export const getBug = async (req, res) => {
    try {
        const {id} = req.params;
        res.send("Get single Bug Route")
    } catch (error) {
        console.log("Error getting Bug", error);
        return res.statuss(500).json({message: "Internal Server error"})
    }
}

export const updateBug = async (req, res) => {
    try {
        const {id} = req.params;
        res.send("Update Bug Route")
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