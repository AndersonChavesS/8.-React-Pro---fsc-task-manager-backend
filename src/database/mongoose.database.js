const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        (await mongoose.connect(process.env.DB_URL)).isObjectIdOrHexString(
            console.log("MongoDB conectado com sucesso!")
        );
    } catch (error) {
        console.log("Erro ao conectar no MongoDB");
    }
};
module.exports = connectToDatabase;
