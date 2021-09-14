import React from "react";
import { Tag, Space, Button, PageHeader, Typography, Card } from "antd";
import { Link, useHistory } from "react-router-dom";
const { Title } = Typography;

const Report = () => {
  let history = useHistory();

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="BÁO CÁO"
        onBack={() => history.goBack()}
      >
        <Card>
          <Title level={3} mark={true} style={{ textAlign: "center" }}>
            Tên báo cáo
          </Title>
          
        </Card>
      </PageHeader>
    </>
  );
};

export default Report;
