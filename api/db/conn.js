const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    // Authentication
    await mongoose.connect(
      "enter-your-mongo-db-connection-string"
    );

    // Log
    console.log("Conectado ao banco de dados com sucesso!")
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
