import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button, PageHeader } from "antd";
import schoolAPI from "../../apis/schoolAPI";
import { Link, useHistory } from "react-router-dom";

const SchoolHome = () => {
  let history = useHistory();

  const columns = [
    {
      title: "ID",
      dataIndex: "name",
      key: "name",
      render: (text) => text,
    },
    {
      title: "Tên báo cáo",
      dataIndex: "pgd",
      key: "pgd",
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "pgd",
      key: "pgd",
    },
    {
      title: "Phòng ban tạo",
      dataIndex: "pgd",
      key: "pgd",
    },
    {
      title: "Trạng Thái",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag === "Đã nộp" ? "geekblue" : "green";
            if (tag === "Chưa nộp") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to="/truong/danhgia">
            <Button type="primary">ĐÁNH GIÁ & KẾT QUẢ</Button>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="DANH SÁCH BÁO CÁO"
      >
        <Table columns={columns} dataSource={null} />
      </PageHeader>
    </>
  );
};

export default SchoolHome;
