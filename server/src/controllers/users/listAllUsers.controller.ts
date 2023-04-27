import { Request, Response } from "express";
import { listAllUsersService } from "../../services";

export const listAllUsersController = async (req: Request, res: Response) => {
  const userId = req.query.since as string;

  const users = await listAllUsersService(userId);

  return res.status(200).json(users);
};
