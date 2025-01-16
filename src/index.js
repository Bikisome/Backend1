import dotnev from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotnev.config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.error("Error while connnectiong with the DB ",error);
    process.exit(1);
})



// import express from "express"; 
// const app = express();

// (async () => {
//   try {
//     await mongoose .connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB", error);
//   }
// })();