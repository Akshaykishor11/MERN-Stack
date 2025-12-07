import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();   // make sure .env is loaded here too

export const dbConnection = () => {
  console.log("MONGO_URI in dbConnection:", process.env.MONGO_URI); // debug

  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
