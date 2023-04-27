import { Request, Response } from "express";
import { usersRepositoriesService } from "../../services";

export const usersRepositoriesController = async (req: Request, res: Response) => {
  const userName = req.params.username;

  const repositories = await usersRepositoriesService(userName);

  return res.status(200).json(repositories);
};
