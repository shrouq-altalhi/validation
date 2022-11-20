import express from "express";
import router from "./routes/rides.route";

const app = express();
const port = 5001;
app.use(express.json());

app.use("/rides",router)

app.listen(port, () => {
  console.log(`The server running in port ${port}`);
});
