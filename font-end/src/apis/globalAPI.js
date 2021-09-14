import axiosWebApiClient from "../apis/axiosWebApiHCM";

const globalAPI = {
  getSession: () => {
    const url = `/wapiquanly/getSessionData`;
    return axiosWebApiClient.get(url);
  },

  getDonVi: () => {
    const url = `wapiquanly/getDonVi`;
    return axiosWebApiClient.get(url);
  },
  
  getDonViFull: () => {
    const url = `wapiquanly/getDonViFull`;
    return axiosWebApiClient.get(url);
  },
  getPhongGiaoDuc: () => {
    const url = `/wapiquanly/getPhongGiaoDuc`;
    return axiosWebApiClient.get(url);
  },
  loginsso: (params) => {
    const url = `wapiquanly/loginsso`;
    return axiosWebApiClient.post(url, params);
  },
};
export default globalAPI;
