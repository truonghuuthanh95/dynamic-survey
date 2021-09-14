import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button, Select, PageHeader } from "antd";
import SGDAPI from "../../apis/sgdAPI";
import schoolAPI from "../../apis/schoolAPI";
import { Link, useHistory } from "react-router-dom";
import { PlusOutlined, UserOutlined, EyeOutlined } from "@ant-design/icons";

const { Option } = Select;

const columns = [
  {
    title: "ID",
    dataIndex: ["school", "schoolId"],
    key: "name",
    render: (text) => text,
  },
  {
    title: "Tên báo cáo",
    dataIndex: ["school", "tenTruong"],
    key: "name",
    render: (text) => text,
  },
  {
    title: "Ngày tạo",
    dataIndex: ["school", "tenTruong"],
    key: "name",
    render: (text) => text,
  },
  {
    title: "Ngày hết hạn",
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
          <Link to={`/sgd/danhgia/${text.school.schoolId}`}>
            <Button type="primary">Xem</Button>
          </Link>
        ) : null}
      </Space>
    ),
  },
];

const ListSchoolDanhGia = () => {
  let history = useHistory();

  useEffect(() => {}, []);
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="DANH SÁCH BÁO CÁO"
        extra={[
          <Link to="/sgd/createreport">
            <Button size="large" key="1" type="primary">
              <PlusOutlined />
              TẠO MỚI
            </Button>
          </Link>,
        ]}
      >
        <Table columns={columns} dataSource={null} />
      </PageHeader>
    </>
  );
};

export default ListSchoolDanhGia;
