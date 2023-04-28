import { createContext, useContext, useState } from "react";
import { AxiosError } from "axios";
import { usersURL } from "../../service/api";
import {
  IDefaultErrorResponse,
  IDefaultProviderProps,
  IContextProps,
  IUsersData,
  IUsersDetails,
  IUserRepositories,
} from "./interfaces";

const ApiContext = createContext<IContextProps>({} as IContextProps);

export const ApiProvider = ({ children }: IDefaultProviderProps) => {
  const [usersData, setUsersData] = useState<IUsersData[]>([] as IUsersData[]);
  const [userDetails, setUserDetails] = useState<IUsersDetails[]>(
    [] as IUsersDetails[]
  );
  const [userRepositories, setUserRepositories] = useState<IUserRepositories[]>(
    [] as IUserRepositories[]
  );

  const fetchUsers = async (userId: number) => {
    await usersURL
      .get("", {
        params: {
          since: userId,
        },
      })
      .then((res) => {
        setUsersData(res.data.data);
      })
      .catch((err) => {
        const currentError = err as AxiosError<IDefaultErrorResponse>;
        console.log(currentError);
      });
  };

  const fetchUsersDetails = async (userName: string) => {
    await usersURL
      .get(`/${userName}/details`)
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((err) => {
        const currentError = err as AxiosError<IDefaultErrorResponse>;
        console.log(currentError);
      });
  };

  const fetchUserRepositories = async (userName: string) => {
    await usersURL
      .get(`/${userName}/repos`)
      .then((res) => {
        setUserRepositories(res.data);
      })
      .catch((err) => {
        const currentError = err as AxiosError<IDefaultErrorResponse>;
        console.log(currentError);
      });
  };

  return (
    <ApiContext.Provider
      value={{
        usersData,
        setUsersData,
        userDetails,
        setUserDetails,
        userRepositories,
        setUserRepositories,
        fetchUsers,
        fetchUsersDetails,
        fetchUserRepositories,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
export const useApi = () => useContext(ApiContext);
