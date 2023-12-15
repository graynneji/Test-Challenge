const express = require("express");
const userRoutes = require("./Routes/userRoute");

const app = express();
const port = process.env.PORT;

//Middlewares
app.use(express.json());

//Routes
app.use("/", userRoutes);

app.listen(process.env.PORT || 1010, () => {
  console.log(`Backend server running ${port}`);
});
