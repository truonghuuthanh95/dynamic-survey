import React, { useState, useEffect } from "react";
import { Form, Button, Select, Row, Col, Card, message } from "antd";
import globalAPI from "../../apis/globalAPI";
import logo from "../../statics/images/logo_so.png";

const { Option, OptGroup } = Select;

const Login = () => {
  const [form] = Form.useForm();
  const [schools, setSchools] = useState([]);
  const [pgds, setpgds] = useState([]);

  const getSchools = async () => {
    await globalAPI.getDonVi().then((res) => setSchools(res.Result));
  };
  const getPGDs = async () => {
    await globalAPI.getPhongGiaoDuc().then((res) => setpgds(res.Result));
  };
  useEffect(() => {
    getSchools();
    getPGDs();
  }, []);
  const handleSSO = () => {
    form.validateFields().then(async () => {
      const schoolID = form.getFieldValue("schoolID");
      const data = {
        SysUserName: "DGCNTT",
        SysPassword: "23g!@%hnjlRF",
        Param1: schoolID,
        Param2: "param2",
        Param3: "param3",
        Returnuri: "http://danhgiacntt.hcm.edu.vn/loginsso",
        // Returnuri: "http://localhost:3000/loginsso",
        isHocSinh: "false",
      };
      await globalAPI.loginsso(data).then((res) => {
        if (res.StatusCode === 200) {
          window.location.href = res.Result;
        } else {
          message.error("Có lỗi xảy ra!");
        }
      });
    });
  };
  return (
    <>
      <Row style={{ backgroundColor: "#9d9d9d", height: "100vh" }}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 8, offset: 8 }}
          style={{ paddingTop: 200 }}
        >
          <Card bordered={false}>
            <span
              style={{
                width: "100%",
                textAlign: "center",
                display: "block",
                paddingBottom: 10,
              }}
            >
              <img src={logo} alt="logoso"></img>
            </span>
            <Form name="control-hooks" onFinish={handleSSO} form={form}>
              <Form.Item
                name="schoolID"
                label="Trường"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn trường!",
                  },
                ]}
              >
                <Select
                  placeholder="Vui lòng chọn đơn vị"
                  onChange={(e) => form.setFieldsValue(console.log(e))}
                  allowClear
                  showSearch
                  optionFilterProp="children"
                >
                  {pgds.map((pgd) => (
                    <OptGroup label={pgd.TenPGD} key={pgd.PGDID}>
                      <Option key={pgd.PGDID} value={pgd.PGDID}>
                        {pgd.TenPGD}
                      </Option>
                      {schools
                        .filter((s) => s.PGDID === pgd.PGDID)
                        .map((s) => (
                          <>
                            <Option key={s.SchoolID} value={s.SchoolID}>
                              {s.TenTruong}
                            </Option>
                          </>
                        ))}
                    </OptGroup>
                  ))}
                </Select>
              </Form.Item>
              <p style={{ textAlign: "center" }}>
                <Button htmlType="submit" type="primary">
                  TIẾP TỤC
                </Button>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
