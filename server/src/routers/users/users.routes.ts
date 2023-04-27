import { Router } from "express";
import {
  listAllUsersController,
  usersDetailsController,
  usersRepositoriesController,
} from "../../controllers";

const usersRoute = Router();

//listAll
usersRoute.get("/", listAllUsersController);

//listDetails
usersRoute.get("/:username/details", usersDetailsController);

//listRepositories
usersRoute.get("/:username/repos", usersRepositoriesController);

export default usersRoute;
