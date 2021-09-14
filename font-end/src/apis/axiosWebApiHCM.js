import axios from "axios";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosWebApiClient = axios.create({
  baseURL: "https://wapi.hcm.edu.vn/ChuyenTruongMoRong",
  headers: {
    "content-type": "application/json",
  },
});

axiosWebApiClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  config.headers = {
    Token: sessionStorage.getItem("token"),
  };
  return config;
});

axiosWebApiClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosWebApiClient;
