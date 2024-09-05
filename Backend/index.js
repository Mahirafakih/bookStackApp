import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Your database in connected");
} catch (error) {
  console.log("error", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
