import instance from "./axios";
import { first } from "lodash";

export type HttpParamsProps = [string, any];
export const swrGet = ([url, params]: HttpParamsProps): Promise<any> => {
  return instance.get(url, { params }).then(({ data }) => data?.data);
};
export const swrDel = ([url, data]: HttpParamsProps): Promise<any> => {
  return instance.delete(url, { data }).then(({ data }) => data?.data);
};

export const swrPut = ([url, data]: HttpParamsProps): Promise<any> => {
  return instance.put(url, data).then(({ data }) => data?.data);
};

export const swrPost = ([url, data]: HttpParamsProps): Promise<any> => {
  return instance.post(url, data).then(({ data }) => data?.data);
};

export const swrFind = ([url, params]: HttpParamsProps): Promise<any> => {
  return swrGet([url, params]).then((data: any[]) => first(data));
};

export const swrSearch = ([url, params]: HttpParamsProps): Promise<any> => {
  return swrGet([url, { _withcount: true, ...params }]);
};
