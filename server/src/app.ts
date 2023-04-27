import express from "express";
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";

import handleAppErrorMiddleware from "./middlewares/errors/handleAppError.middleware";
import usersRoute from "./routers/users/users.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", usersRoute);

app.use(handleAppErrorMiddleware);

export default app;
