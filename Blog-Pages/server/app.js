import express from "express";
import mongoose from "mongoose";
import blogRoute from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user" , router);
app.use("/api/blog", blogRoute);

 mongoose.connect(
    "mongodb+srv://gaurakrishna31:testing123@cluster0.hjiytkr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>{
    console.log("Connected TO Database and Listening TO Localhost 5000")
  }).catch((err) => {console.log(err)
  });
