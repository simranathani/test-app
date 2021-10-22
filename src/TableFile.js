import React, { useState } from 'react'
import { Row, Col, Button, Form, Input, Modal, Table, Divider } from 'antd'
import './Test.css'
import Navbar from './Navbar'
const { useForm } = Form

const TableFile = (props) => {
  const [form] = useForm();
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true)
  }

  const cancel = () => {
    setModalVisible(false)
  }

  const onFinish = (values) => {
    if (values) {
      setModalVisible(false)
      form.resetFields()
    }
  }
  let dataSource = [];
  for (let i = 1; i < 7; i++) {
    dataSource.push({
      key: i,
      sno: `${i}`,
      name: 'Mike',
      user: 'mike_william',
      email: 'mike.william@xyz.com',
    });
  }

  const columns = [
    {
      title: 'S No.',
      dataIndex: 'sno',
      key: 'sno',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'User Name',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      dataIndex: 'key',
      key: 'name',
      render: (key, name) =>
        <div>
          <Button onClick={(key) => { showModal(name) }} >Edit</Button>
        </div>
    },
  ];
  return (
    <>
      <div style={{ marginBottom: "5.5rem" }}>
        <Navbar />
      </div>
      <div  >
        <Row>
          <Col className="ant-col-24">
            <section>
              <Row>
                <Col className="ant-col-24">
                  <Table
                    columns={columns}
                    dataSource={dataSource}
                    scroll={{ x: true }}
                  />
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
        <Modal title={null} visible={isModalVisible} onCancel={cancel} >
          <Form
            className="registeration-form"
            layout="vertical"
            onFinish={onFinish}
            form={form}
          >
            <Row  >
              <Col md={24} className="ant-col-24">
                <div className="account-title">Add Detals
                  <Divider style={{ margin: 0 }} />
                </div>
              </Col>
            </Row>
            <div style={{ paddingBottom: "0rem", marginTop: "2rem" }}>
              <Row gutter={24}>
                <Col className="ant-col-24" md={24} >
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter  Name!',
                      },

                    ]}
                    label="Name"

                  >
                    <Input
                      type="text"
                      placeholder=" Name"
                      className="input"
                    />
                  </Form.Item>


                </Col>
                <Col className="ant-col-24" md={24} >
                  <Form.Item
                    name="user_name"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter last Name!',
                      },


                    ]}
                    label="Last Name"

                  >
                    <Input
                      type="text"
                      placeholder="User Name"
                      className="input"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col className="ant-col-24" md={24}>
                  <Form.Item

                    name="mail"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                    label="Email"
                  >
                    <Input type="text"
                      placeholder="Email"
                      className="login-field"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button htmlType="submit" style={{ backgroundColor: "#2b2b2b", color: "white", width: "20%" }}>ADD</Button>
                </div>
              </Form.Item>
            </div>

          </Form>
        </Modal>

      </div>
    </>
  )
}

export default TableFile
