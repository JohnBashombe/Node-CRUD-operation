import express from "express";

import { route } from "./routes";

import DBConfig from "./database/config";

import * as dotenv from "dotenv";

const db_config = new DBConfig();
db_config.dbConfig();

dotenv.config();

const app = express();

const { PORT } = process.env;

route(app);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
