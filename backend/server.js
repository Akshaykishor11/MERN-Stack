import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

console.log("MONGO_URI in server.js:", process.env.MONGO_URI);

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
