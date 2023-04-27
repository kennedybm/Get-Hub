import { Router } from "express";
import { listAllUsersController, usersDetailsController } from "../../controllers";

const usersRoute = Router();

//listAll
usersRoute.get("/", listAllUsersController);

//listDetails
usersRoute.get("/:username/details", usersDetailsController);

export default usersRoute;
