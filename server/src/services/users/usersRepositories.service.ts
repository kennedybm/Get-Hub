import { octokit } from "../../utils/octokit";
import { AppError } from "../../errors/AppError";

export const usersRepositoriesService = async (userName: string) => {
  try {
    const retrievedData = await octokit.request("GET /users/{owner}/repos", {
      owner: userName,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return retrievedData.data;
  } catch (error: any) {
    if (error.response) {
      throw new AppError(parseInt(error.status), `${error.message}`);
    }
  }
};
