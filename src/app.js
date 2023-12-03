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
app.use("/", AllRouter);
const port = 3301;
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
    secret: "lanskjagsfjhgsdjhgf",
    Store: mySequelizeStore1,
    saveUninitialized: false,
    resave: true,
    proxy: false,
  })
);
mySequelizeStore1.sync();

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
