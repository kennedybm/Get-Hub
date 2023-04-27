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

    let response: Object = {
      id: retrievedData.data.id,
      login: retrievedData.data.login,
      url: retrievedData.data.html_url,
      createdAt: retrievedData.data.created_at,
    };

    return response;
  } catch (error: any) {
    if (error.response) {
      throw new AppError(parseInt(error.status), `${error.message}`);
    }
  }
};
