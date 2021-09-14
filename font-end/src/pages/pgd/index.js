import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button, Select } from "antd";
import SGDAPI from "../../apis/sgdAPI";
import schoolAPI from "../../apis/schoolAPI";
import { Link } from "react-router-dom";

const { Option } = Select;

const columns = [
  {
    title: "schoolId",
    dataIndex: ["school", "schoolId"],
    key: "name",
    render: (text) => text,
  },
  {
    title: "Tên Trường",
    dataIndex: ["school", "tenTruong"],
    key: "name",
    render: (text) => text,
  },
  {
    title: "Trạng Thái",
    key: "isCreated",
    dataIndex: "isCreated",
    render: (tags) => (
      <>
        {
          <Tag color={tags ? "green" : "volcano"}>
            {tags ? "Đã nộp" : "Chưa nộp"}
          </Tag>
        }
      </>
    ),
  },
  {
    title: "Thao tác",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        {text.isCreated ? (
          <Link to={`/pgd/danhgia/${text.school.schoolId}`}>
            <Button type="primary">Xem</Button>
          </Link>
        ) : null}
      </Space>
    ),
  },
];

const ListSchoolDanhGia = () => {
  const [schools, setschools] = useState([]);
  const [pgd, setpgd] = useState(() =>
    JSON.parse(sessionStorage.getItem("session"))
  );

  // const getTrangThaiBaoCaosByPGD = async (pgdId) => {};
  const handleChangePGD = async (pgdId) => {
    const res = await SGDAPI.getTrangThaiBaoCaosByPGD(pgdId);
    setschools(res.result);
  };
  const getData = async (pgdId) => {
    const res = await SGDAPI.getTrangThaiBaoCaosByPGD(pgdId);
    setschools(
      res.result.filter((s) => s.school.cap2 === 1 || s.school.cap3 === 1)
    );
  };
  useEffect(() => {
    getData(pgd.SchoolId);
    // getTrangThaiBaoCaosByPGD();
  }, []);
  return (
    <>
      <h2 id="h2-tieude">danh sách trường đánh gia CNTT</h2>
      <Table columns={columns} dataSource={schools} />
    </>
  );
};

export default ListSchoolDanhGia;
