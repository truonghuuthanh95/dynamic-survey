import axiosClient, { axiosClientPostFormData } from "../apis/axiosClient";
// const schoolId = JSON.parse(sessionStorage.getItem("session")).SchoolId;
const schoolAPI = {
  getBaoCao: (schoolId) => {
    const url = `/School/getBaoCao/${schoolId}`;
    return axiosClient.get(url);
  },
  getKetQuaBaoCaoCNTT: (schoolId) => {
    const url = `/School/getKetQuaBaoCaoCNTT/${schoolId}`;
    return axiosClient.get(url);
  },
  getBaoCaoTieuChiMain: (params) => {
    const url = `/School/getBaoCaoTieuChiMain/${params}`;
    return axiosClient.get(url);
  },
  updateKetQuaBaoCao: (params, schoolId) => {
    const url = `/School/updateKetQuaBaoCao/${schoolId}`;
    return axiosClient.post(url, params);
  },
  uploadFile: (id, schoolId, params) => {
    const url = `/School/uploadFile/${id}/${schoolId}`;
    return axiosClientPostFormData.post(url, params);
  },
  updatePhanMemOnline: (params) => {
    const url = `/School/updatePhanMemOnline`;
    return axiosClient.post(url, params);
  },
  getPhanMemBySchoolId: (params) => {
    const url = `/School/getPhanMemBySchoolId/${params}`;
    return axiosClient.get(url);
  },
};

export default schoolAPI;
