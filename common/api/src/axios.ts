import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response;
    } else {
      return Promise.reject(response);
    }
  },
  (error: AxiosError) => {
    // 在这里处理错误响应
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权
          return Promise.reject(`未授权: ${error?.message || 401}`);
        case 404:
          // 处理未找到
          return Promise.reject(`未找到: ${error?.message || 404}`);
        case 500:
          // 处理服务器错误
          return Promise.reject(`服务器错误: ${error?.message || 500}`);
        default:
          return Promise.reject(error);
      }
    }
  },
);

export default instance;
