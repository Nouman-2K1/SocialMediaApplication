import "dotenv/config";
import express from "express";
import { connectDb } from "./db/config.js";
import AllRouter from "./router/AllRouter.js";
import dbInit from "./db/init.js";
import Session from "express-session";
import sequelize from "./db/config.js";
import SequelizeStore from "connect-session-sequelize";
import AuthenticateMiddleware from "./middleware/authenticate.js";

const app = express();
app.use(express.json());
const port = process.env.PORT;

connectDb();

dbInit()
  .then(() => console.log("db synced"))
  .catch(() => console.log("db not synced"));

const mySequelizeStore = SequelizeStore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});

app.use(
  Session({
    secret: process.env.SESSION_SECRET,
    store: mySequelizeStore1,
    saveUninitialized: true,
    resave: false,
    proxy: false,
  })
);
mySequelizeStore1.sync({});

app.use(express.static("public"));

app.use("/", AllRouter);
app.post("/", AuthenticateMiddleware, (req, res) => {
  return res.json({
    message: "Hello world1",
  });
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is listening at http://localhost:${port}`);
  }
});
