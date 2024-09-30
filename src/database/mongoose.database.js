const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        (await mongoose.connect(process.env.DB_URL)).isObjectIdOrHexString(
            console.log("Connected to MongoDB successfuly!")
        );
    } catch (error) {
        console.log("Error Connecting to MongoDB!");
    }
};
module.exports = connectToDatabase;
