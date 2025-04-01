import instance from "./axios";
import { AxiosResponse } from "axios";

export const get = <ReqT, ResT>(
  url: string,
  data?: ReqT,
): Promise<AxiosResponse<ResT>> => {
  return instance
    .get(url, { params: { ...data } })
    .catch((err) => Promise.reject(err));
};

export const post = <ReqT, ResT>(
  url: string,
  data: ReqT,
): Promise<AxiosResponse<ResT>> => {
  return instance.post(url, { ...data }).catch((err) => Promise.reject(err));
};

export const del = <ReqT, ResT>(
  url: string,
  data: ReqT,
): Promise<AxiosResponse<ResT>> => {
  return instance
    .delete(url, { data: data })
    .catch((err) => Promise.reject(err));
};

export const put = <ReqT, ResT>(
  url: string,
  data: ReqT,
): Promise<AxiosResponse<ResT>> => {
  return instance.put(url, { ...data }).catch((err) => Promise.reject(err));
};
