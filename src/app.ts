import express from "express";
import router from "./routes/rides.route";
import rate from "./routes/rating.route";
import student from "./routes/student.router";
import bank from "./routes/bank.router";



const app = express();
const port = 5001;
app.use(express.json());

app.use("/rides", router);
app.use("/rate", rate);
app.use("/std", student);
app.use("/bank", bank);


app.listen(port, () => {
  console.log(`The server running in port ${port}`);
});
