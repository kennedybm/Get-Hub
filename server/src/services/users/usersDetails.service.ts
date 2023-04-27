import { octokit } from "../../utils/octokit";
import { AppError } from "../../errors/AppError";

export const usersDetailsService = async (userName: string) => {
  if (!userName) {
    throw new AppError(400, "Username is required");
  }

  try {
    const retrievedData = await octokit.request("GET /users/{username}", {
      username: userName,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return retrievedData.data;
  } catch (error: unknown) {
    throw new AppError(404, "Resource not found");
  }
};
