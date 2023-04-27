import { Router } from "express";
import { listAllUsersController } from "../../controllers";

const usersRoute = Router();

//listAll
usersRoute.get("/", listAllUsersController);

export default usersRoute;
