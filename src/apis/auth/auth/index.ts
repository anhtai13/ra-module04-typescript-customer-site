import { AxiosResponse } from "axios";

import axiosInstance from "../../base.api";
import { LoginRequest } from "./requests/login-request";
import { RegisterRequest } from "../../register/requests/register-request";

const loginApi = async (requestBody: LoginRequest): Promise<any> => {
  return axiosInstance
    .post("/login", requestBody)
    .then((response: AxiosResponse<any>) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const logoutApi = async () => {
  return axiosInstance
    .post("/logout", {})
    .then((response: AxiosResponse<void>) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const register = async (requestBody: RegisterRequest): Promise<void> => {
  return axiosInstance
    .post("/register", requestBody)
    .then((response: AxiosResponse<void>) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export default { loginApi, logoutApi, register };
