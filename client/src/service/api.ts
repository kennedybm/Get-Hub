import axios from "axios";

export const usersURL = axios.create({
  baseURL: "http://localhost:5500/api/users",
});
