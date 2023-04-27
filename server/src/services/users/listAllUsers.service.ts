import { octokit } from "../../utils/octokit";
import { AppError } from "../../errors/AppError";

export const listAllUsersService = async (userId: string) => {
  const parsedId = parseInt(userId);
  let parsedLinks: string[] | undefined = [];
  let response: Object = {};

  try {
    const retrievedData = await octokit.request("GET /users{?since}", {
      since: parsedId,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    parsedLinks = retrievedData.headers.link?.split(",");

    response = {
      data: retrievedData.data,
      firstPage: parsedLinks![1],
      nextPage: parsedLinks![0],
    };
  } catch (error: unknown) {
    throw new AppError(304, "Not modified");
  }

  return response;
};
