const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    // Authentication
    await mongoose.connect(
      "mongodb+srv://talesroliveira:jf3VaLkJwqWCOHl2@goalplan.dmbmxap.mongodb.net/?retryWrites=true&w=majority"
    );

    // Log
    console.log("Conectado ao banco de dados com sucesso!")
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
