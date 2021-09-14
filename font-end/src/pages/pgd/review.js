import React, { useState, useEffect } from "react";
import { Input, Button, message } from "antd";
import { useParams } from "react-router-dom";

import { PlusSquareOutlined } from "@ant-design/icons";
import SGDAPI from "../../apis/sgdAPI";
import SCHOOLAPI from "../../apis/schoolAPI";

const DanhGia = () => {
  let { schoolId } = useParams();

  const [baoCao, setbaoCao] = useState([]);
  const [tieuChiDanhGiaMains, settieuChiDanhGiaMains] = useState([]);
  const [phanMems, setPhanMems] = useState();

  const getBaoCao = async () => {
    const res = await SGDAPI.getKetQuaBaoCaoBySChoolId(schoolId);
    setbaoCao(res.result);
  };
  const getBaoCaoTieuChiMain = async () => {
    const res = await SGDAPI.getBaoCaoTieuChiMainBySChoolId(schoolId);
    settieuChiDanhGiaMains(res.result);
  };
  const getPhanMem = async () => {
    const res = await SCHOOLAPI.getPhanMemBySchoolId(schoolId);
    setPhanMems(res.result);
  };
  const handleChangeScore = (e, input) => {
    //CHECK INPUT IS NUMBER
    //IS VALID NUMBER
    if (!isNaN(parseFloat(e))) {
      let baocaoTmps = [...baoCao];
      //REPARE FOR UPDATE
      let baoCaoTmp = baocaoTmps.filter((s) => s.id === input.id)[0];
      baoCaoTmp.diemSgdcham = parseFloat(e);
      //FIND INDEX TO UPDATE
      let index = baocaoTmps.findIndex((s) => s.id === input.id);
      //UPDATE
      baocaoTmps[index] = baoCaoTmp;
      setbaoCao(baocaoTmps);
    }
    //NOT A NUMBER
    else {
      message.error("Vui lòng nhập số", 3);
    }
    //END
  };

  const handleChangeNote = (e, input) => {
    let baocaoTmps = [...baoCao];
    //REPARE FOR UPDATE
    let baoCaoTmp = baocaoTmps.filter((s) => s.id === input.id)[0];
    baoCaoTmp.ghiChu = e;
    //FIND INDEX TO UPDATE
    let index = baocaoTmps.findIndex((s) => s.id === input.id);
    //UPDATE
    baocaoTmps[index] = baoCaoTmp;
    setbaoCao(baocaoTmps);
  };

  const updateKetQuaBaoCao = async () => {
    const res = await SGDAPI.updateKetQuaBaoCao(baoCao);
    if (res.statusCode === 200) {
      message.success("Lưu thành công!", 3);
    } else {
      message.error("Có lỗi xảy ra!", 3);
    }
  };

  useEffect(() => {
    getBaoCao();
    getBaoCaoTieuChiMain();
    getPhanMem();
  }, []);
  return (
    <div>
      <h2 id="h2-tieude">Bảng điểm đánh giá công nghệ thông tin</h2>
      {phanMems ? (
        <>
          <p>
            <b>Phầm mềm:</b> {phanMems.tenPhanMem}
          </p>
          <p>
            <b>Website:</b> <a href={phanMems.website}>{phanMems.website}</a>
          </p>
          <p>
            <b>Ba công khai:</b>
            <a href={phanMems.baCongKhai}> {phanMems.baCongKhai}</a>
          </p>
          <p>
            <b>Thu tục biểu mẫu:</b>
            <a href={phanMems.thuTucBieuMau}>{phanMems.thuTucBieuMau}</a>
          </p>
        </>
      ) : null}
      <table id="customers">
        <thead>
          <tr>
            <th>STT</th>
            <th style={{ width: "30%" }}>NỘI DUNG</th>
            <th style={{ width: "5%" }}>ĐIỂM CHUẨN</th>
            <th style={{ width: "5%" }}>ĐIỂM TỰ DÁNH GIÁ</th>
            <th style={{ width: "5%" }}>SGD CHẤM</th>
            <th style={{ width: "10%" }}>File</th>
            <th>GHI CHÚ</th>
          </tr>
        </thead>
        <tbody>
          {tieuChiDanhGiaMains.map((s, index) => (
            <>
              <tr key={s.index} style={{ fontWeight: "bold" }}>
                <td>{index + 1}</td>
                <td>{s.name}</td>
                <td>{s.diem}</td>
                <td>
                  {baoCao
                    .filter(
                      (bc) => bc.tieuChiDanhGia.tieuChiDanhGiaMainId === s.id
                    )
                    .reduce((sum, { diemDatDuoc }) => sum + diemDatDuoc, 0)}
                </td>
                <td>
                  {baoCao
                    .filter(
                      (bc) => bc.tieuChiDanhGia.tieuChiDanhGiaMainId === s.id
                    )
                    .reduce((sum, { diemSgdcham }) => sum + diemSgdcham, 0)}
                </td>
                <td></td>
              </tr>
              {baoCao
                .filter((bc) => bc.tieuChiDanhGia.tieuChiDanhGiaMainId === s.id)
                .sort((a, b) => (a.stt > b.stt ? 1 : -1))
                .map((bc, index2) => (
                  <tr key={index2}>
                    <td>{`${index + 1}.${index2 + 1}`}</td>
                    <td>{bc.tieuChiDanhGia.tieuChiDanhGiaSub.name}</td>
                    <td>{bc.tieuChiDanhGia.tieuChiDanhGiaSub.diem}</td>
                    <td>{bc.diemDatDuoc}</td>
                    <td>
                      {/* <Input
                        onChange={(e) => handleChangeScore(e.target.value, bc)}
                        defaultValue={bc.diemSgdcham}
                      /> */}
                    </td>
                    <td>
                      <a
                        href={`${process.env.REACT_APP_BASE_URL}/SGD/downloadFile?fileName=${bc.xacMinh}`}
                      >
                        {bc.xacMinh}
                      </a>
                    </td>
                    <td>
                      {/* <Input
                        onChange={(e) => handleChangeNote(e.target.value, bc)}
                        defaultValue={bc.ghiChu}
                      /> */}
                    </td>
                  </tr>
                ))}
            </>
          ))}
          <tr>
            <td colspan="3">
              <b>Tổng</b>
            </td>
            <td>
              <b>
                {baoCao.reduce((sum, { diemDatDuoc }) => sum + diemDatDuoc, 0)}
              </b>
            </td>
            <td>
              <b>
                {baoCao.reduce((sum, { diemSgdcham }) => sum + diemSgdcham, 0)}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ textAlign: "center" }}>
        <Button
          key="1"
          type="primary"
          // style={{float:'right'}}
          onClick={updateKetQuaBaoCao}
        >
          <PlusSquareOutlined /> LƯU
        </Button>
      </p>
    </div>
  );
};
export default DanhGia;
