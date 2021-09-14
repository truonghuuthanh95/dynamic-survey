import React, { useState } from "react";
import {
  Table,
  Tag,
  Space,
  Button,
  Select,
  PageHeader,
  Card,
  Input,
  Form,
  DatePicker,
  Modal,
} from "antd";
import {
  PlusOutlined,
  SaveOutlined,
  SettingOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
const { Option } = Select;

const columm = [
  {
    title: "ID",
    dataIndex: "name",
    key: "name",
    render: (text) => text,
  },
  {
    title: "Tên nhóm chọn",
    dataIndex: "pgd",
    key: "pgd",
  },
  {
    title: "Thao tác",
    dataIndex: "pgd",
    key: "pgd",
  },
];
const CreateReport = () => {
  let history = useHistory();
  const [isShowOptionGroup, setIsShowOptionGroup] = useState(false);
  const [isShowCreateOption, setIsShowCreateOption] = useState(false);
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="TẠO MỚI BÁO CÁO"
        extra={[
          <Link to="/createorder">
            <Button icon={<SaveOutlined />} size="large" key="1" type="primary">
              LƯU LẠI
            </Button>
          </Link>,
        ]}
      >
        <Card>
          <Form labelCol={{ span: 3 }} layout="horizontal">
            <Form.Item
              label="Tiêu đề báo cáo"
              name="SenderFullname"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập!",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              {...{
                wrapperCol: { offset: 0, span: 6 },
              }}
              label="Ngày bắt đầu"
              name="cccd"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập!",
                },
              ]}
            >
              <DatePicker
                format="DD/MM/YYYY HH:mm"
                showTime={{ format: "HH:mm" }}
                placeholder="Chọn ngày"
              />
            </Form.Item>
            <Form.Item
              {...{
                wrapperCol: { offset: 0, span: 6 },
              }}
              label="Ngày kết thúc"
              name="SenderTel"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập!",
                },
              ]}
            >
              <DatePicker
                format="DD/MM/YYYY HH:mm"
                showTime={{ format: "HH:mm" }}
                placeholder="Chọn ngày"
              />
            </Form.Item>
            <Form.Item
              {...{
                wrapperCol: { offset: 0, span: 6 },
              }}
              label="Đối tượng báo cáo"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập!",
                },
              ]}
            >
              <Select placeholder="Đối tượng báo cáo" allowClear>
                <Option value="EMS">Mầm nom</Option>
                <Option value="BKs">Tiểu học</Option>
                <Option value="BsK">Trung học cơ sở</Option>
                <Option value="BKas">Trung học phổ thông</Option>
              </Select>
            </Form.Item>
            <h3>Nôi dung báo cáo </h3>
            <br />
            <Space>
              <Button
                onClick={() => setIsShowOptionGroup(true)}
                type="primary"
                icon={<SettingOutlined />}
              >
                QUẢN LÝ LỰA CHỌN
              </Button>
            </Space>
            <Card style={{ backgroundColor: "#f0f2f5" }}>
              <Form
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.List name="users">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <Space
                          key={key}
                          style={{ display: "flex", marginBottom: 8 }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "first"]}
                            fieldKey={[fieldKey, "first"]}
                            rules={[
                              { required: true, message: "Vui lòng nhập" },
                            ]}
                            style={{ width: "1000px" }}
                          >
                            <Input placeholder="Câu hỏi" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "last"]}
                            fieldKey={[fieldKey, "last"]}
                            rules={[
                              { required: true, message: "Vui lòng chọn" },
                            ]}
                          >
                            <Select
                              style={{ width: "300px" }}
                              placeholder="Kiểu nhập liệu"
                              allowClear
                            >
                              <Option value="EMS">Dạng chữ, số</Option>
                              <Option value="BK">Lựa chọn</Option>
                              <Option value="BKs">Lựa chọn nhiều</Option>
                              <Option value="file">Tải file</Option>
                            </Select>
                          </Form.Item>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          TẠO CÂU HỎI
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </Form>
            </Card>
          </Form>
        </Card>
        <Modal
          title="Nhóm chọn"
          visible={isShowOptionGroup}
          onCancel={() => setIsShowOptionGroup(false)}
          width="1000px"
          okText="THÊM MỚI"
          cancelText="HUỶ"
          onOk={() => {
            setIsShowOptionGroup(false);
            setIsShowCreateOption(true);
          }}
        >
          <Table columns={columm} dataSource={null} />
        </Modal>
        <Modal
          title="Basic Modal"
          visible={isShowCreateOption}
          width="1200px"
          cancelText="HUỶ"
          okText="THÊM MỚI"
          onCancel={() => setIsShowCreateOption(false)}
        >
          <Form
            labelCol={{ span: 4 }}
            // wrapperCol={{ span: 12 }}
            layout="horizontal"
          >
            <Form.Item
              {
                ...{
                  // wrapperCol: { offset: 0, },
                }
              }
              label="Tên nhóm lựa chọn"
              name="SenderFullname"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập!",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "first"]}
                        fieldKey={[fieldKey, "first"]}
                        rules={[{ required: true, message: "Vui lòng nhập" }]}
                        style={{ width: "1000px" }}
                      >
                        <Input placeholder="Câu trả lởi" />
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      TẠO CÂU TRẢ LỜI
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </Modal>
      </PageHeader>
    </>
  );
};

export default CreateReport;
