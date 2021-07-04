import "reflect-metadata";
import express, { Application } from "express";
import morgan from "morgan";
import routers from "./routers";
import { createConnection } from "typeorm";
import dbConfig from "./configs/ormconfig";
import errorHandlingMiddleware from "./middlewares/errorhandling.middleware";

const PORT = process.env.PORT || 5003;
const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(routers);

app.use(errorHandlingMiddleware);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
