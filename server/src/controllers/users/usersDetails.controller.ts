import { Request, Response } from "express";
import { usersDetailsService } from "../../services";

export const usersDetailsController = async (req: Request, res: Response) => {
  const userName = req.params.username;

  const details = await usersDetailsService(userName);

  return res.status(200).json(details);
};
