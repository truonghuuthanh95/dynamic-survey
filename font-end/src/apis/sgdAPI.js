import axiosClient from "../apis/axiosClient";

const SGDAPI = {
  getTrangThaiBaoCaosByPGD: (pgdId) => {
    const url = `/SGD/getTrangThaiBaoCaosByPGD/${pgdId}`;
    return axiosClient.get(url);
  },
  getPGDs: () => {
    const url = `/SGD/getPGDs`;
    return axiosClient.get(url);
  },
  getBaoCaoTieuChiMainBySChoolId: (schoolId) => {
    const url = `/SGD/getBaoCaoTieuChiMainBySChoolId/${schoolId}`;
    return axiosClient.get(url);
  },
  getKetQuaBaoCaoBySChoolId: (schoolId) => {
    const url = `/SGD/getKetQuaBaoCaoBySchoolId/${schoolId}`;
    return axiosClient.get(url);
  },
  updateKetQuaBaoCao: (params) => {
    const url = `/SGD/updateKetQuaBaoCao`;
    return axiosClient.post(url, params);
  },
  downloadFile: (params) => {
    const url = `/SGD/downloadFile?fileName=${params}`;
    return axiosClient.get(url);
  },
};

export default SGDAPI;
