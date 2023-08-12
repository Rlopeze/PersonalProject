import express from "express";
import db from './models'

const app = express();

app.use(express.json()); //middleware que transforma la req.body a un json

const userRoutes = require("./routes/user-routes");
app.use("/user", userRoutes);

app.get("/", (_req, res) => {
  res.send("Welcome to my API Shop");
});

app.use((error, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.statusCode || 500);
  res.json({ message: error.statusMessage || "An unkown error ocurred!" });
});



db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})