import { octokit } from "../../utils/octokit";
import { AppError } from "../../errors/AppError";

export const listAllUsersService = async (userId: string) => {
  const parsedId = parseInt(userId);

  try {
    const retrievedData = await octokit.request("GET /users{?since}", {
      since: parsedId,
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    let parsedLinks: string[] | undefined = retrievedData.headers.link?.split(",");

    let response: Object = {
      data: retrievedData.data,
      firstPage: parsedLinks![1],
      nextPage: parsedLinks![0],
    };

    return response;
  } catch (error: any) {
    if (error.response) {
      throw new AppError(parseInt(error.status), `${error.message}`);
    }
  }
};
