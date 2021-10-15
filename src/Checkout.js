import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { Row, Col, Button, Form, Input, Select, Radio, Space, message, notification } from 'antd'
import './Test.css'
const { useForm } = Form
const { Option } = Select
const Checkout = (props) => {
  const { form } = useForm()
  const [toggle, setToggle] = useState()
  const [state, setState] = useState(false)
  const [values, setValues] = useState({})
  let data = props?.location?.state?.details
  let total = Number(data?.details?.price) * Number(data?.reqQuantity)
  const onFinish = (values) => {
    if (total >= 5000 && total < 10000) {
      if (toggle === 'PLSD123') {
        values.coupCode = toggle
        values.discount = (10 * total) / 100
        setValues(values)
        setState(true)
      } else {
        message.error('Your Order Amount is not greater than 5000')
      }
    }
    else if (total >= 10000) {
      values.coupCode = toggle
      if (toggle === 'PLSD123') {
        values.discount = (10 * total) / 100

      } else {
        values.discount = (15 * total) / 100
      }
      setValues(values)
      setState(true)
    }
    else {
      message.error('Your ordered must meet the requirement in Order to apply discount')
    }
  }

  const onToggle = e => {
    setToggle(e.target.value);
  };

  const Order = () => {
    if (values.discount) {
      notification['success']({
        message: 'Order  Successfull',
        description:
          `Thankyou for placing order, please continue to shop `,
      });
      setTimeout(() => {
        window.location.href = '/'
      }, 500)
    }
  }

  return (
    <div style={{ margin: "0 auto", width: "40%" }} className="payment">
      <Form
        className="registeration-form"
        layout="vertical"
        onFinish={onFinish}
        form={form}
        initialValues={{ expirationYear: `${new Date().getFullYear() + 1}` }}
      >
        <Row gutter={24}>
          <Col md={12} className="ant-col-24">
            <Form.Item
              name="P_firstName"
              rules={[
                {
                  required: true,
                  message: 'Please enter First Name!',
                },
                {
                  pattern: '^[a-zA-Z]{2}[a-zA-Z\\s]+$',
                  message: 'Enter Valid Name'
                },
                {
                  min: 3,
                  max: 20,
                  message: 'Name must be more than 3 characters and less than 20 characters'
                }
              ]}
              label="First Name"

            >
              <Input
                type="text"
                placeholder="First Name"
                className="input"
              />
            </Form.Item>
          </Col>
          <Col md={12} className="ant-col-24">
            <Form.Item
              name="P_lastName"
              rules={[
                {
                  required: true,
                  message: 'Please enter last Name!',
                },
                {
                  pattern: '^[a-zA-Z]{2}[a-zA-Z\\s]+$',
                  message: 'Enter Valid Name'
                },
                {
                  min: 3,
                  max: 20,
                  message: 'Name must be more than 3 characters and less than 20 characters'
                }
              ]}
              label="Last Name"
            >
              <Input
                type="text"
                placeholder="Last Name"
                className="input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={24} className="ant-col-24">
            <Form.Item
              name="streetAddress"
              rules={[{ required: true, message: 'Please enter street address!' }, {
                min: 3,
                message: 'Address must be more than 3 characters'
              }]}
              label="Street Address"
            >
              <Input
                type="text"
                placeholder="Street Address"
                className="input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} className="ant-col-24">
            <Form.Item
              name="city"
              rules={[{ required: true, message: 'Please enter city!' },
              {
                pattern: '^[a-zA-Z]*[a-zA-Z\\s]+$',
                message: 'Enter valid city'
              },
              {
                min: 2,
                message: 'City name must be more than or atleast 2 characters '
              }]}
              label="City"
            >
              <Input
                type="text"
                placeholder="City"
                className="input"
              />
            </Form.Item>
          </Col>
          <Col md={6} className="ant-col-24">
            <Form.Item
              name="state"
              rules={[{ required: true, message: 'Please enter state!' },
              {
                pattern: '^[a-zA-Z]*[a-zA-Z\\s]+$',
                message: 'Enter valid state'
              },
              {
                min: 3,
                message: 'State name must be more than 3 characters '
              }]}
              label="state"
            >
              <Input
                type="text"
                placeholder="State"
                className="input"
              />
            </Form.Item>
          </Col>
          <Col md={6} className="ant-col-24">
            <Form.Item
              name="zipcode"
              rules={[{ required: true, message: 'Please enter code!' }, { min: 3, max: 9, message: "Zip code can be only between 3 to 9 digits" }]}
              label="Zip Code"

            >
              <Input
                type="text"
                placeholder="Zip Code"
                className="input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={24} className="ant-col-24">
            <Form.Item
              name="cardNo"
              rules={[{ required: true, message: 'Please enter Card Number!' }, { min: 16, message: "Card number cannot be less than 16 digits" }, { max: 19, message: "Card number cannot be more than 19 digits" }]}
              label="Card Number"
            >
              <Input
                type="number"
                maxlength="19"
                placeholder="Card Number"
                className="input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col md={10} className="ant-col-24">
            <Form.Item
              style={{ marginRight: "10px" }}
              name="expirationMonth"
              rules={[{ required: true, message: 'Please enter Expiration Month!' }]}
              label="Expiration Month"
            >
              <Select
                className="fields-css"
              >
                <Option value="january">January</Option>
                <Option value="february">February</Option>
                <Option value="march">March</Option>
                <Option value="april">April</Option>
                <Option value="may">May</Option>
                <Option value="june">June</Option>
                <Option value="july">July</Option>
                <Option value="august">August</Option>
                <Option value="september">September</Option>
                <Option value="october">October</Option>
                <Option value="november">November</Option>
                <Option value="december">December</Option>
              </Select>

            </Form.Item>
          </Col>
          <Col md={9} className="ant-col-24">
            <Form.Item
              style={{ marginRight: "10px" }}
              name="expirationYear"
              rules={[{ required: true, message: 'Please enter Expiration Year!' }]}
              label="Expiration Year"

            >
              <Select
                suffixIcon={<i style={{ color: "#464646" }} className="fas fa-angle-down"></i>}
                className="fields-css"
                defaultValue={`${new Date().getFullYear() + 1}`}
              >
                <Option value={`${new Date().getFullYear()}`}>{new Date().getFullYear()}</Option>
                <Option value={`${new Date().getFullYear() + 1}`}>{new Date().getFullYear() + 1}</Option>
                <Option value={`${new Date().getFullYear() + 2}`}>{new Date().getFullYear() + 2}</Option>
                <Option value={`${new Date().getFullYear() + 3}`}>{new Date().getFullYear() + 3}</Option>
                <Option value={`${new Date().getFullYear() + 4}`}>{new Date().getFullYear() + 4}</Option>
                <Option value={`${new Date().getFullYear() + 5}`}>{new Date().getFullYear() + 5}</Option>
                <Option value={`${new Date().getFullYear() + 6}`}>{new Date().getFullYear() + 6}</Option>
                <Option value={`${new Date().getFullYear() + 7}`}>{new Date().getFullYear() + 7}</Option>
                <Option value={`${new Date().getFullYear() + 8}`}>{new Date().getFullYear() + 8}</Option>
                <Option value={`${new Date().getFullYear() + 9}`}>{new Date().getFullYear() + 9}</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={5} className="ant-col-24">
            <Form.Item
              name="cvv"
              rules={[{ required: true, message: 'Please enter CVV!' }, { min: 3, max: 3, message: "Please enter a valid cvv number" }]}
              label="CVV"
            >
              <Input
                type="number"
                placeholder="CVV"
                className="input"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col className="ant-col-24">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Row gutter={[0, 30]} style={{ borderBottom: "0.1px solid #cbd7cf" }}>
                <Col className="ant-col-24" xs={12} >
                  <span>
                    <span className="total">Total</span>
                  </span>
                </Col>
                <Col className="ant-col-24" xs={12} style={{ textAlign: "right" }}>
                  <span>
                    <span className="total-price">${Number(data?.details?.price) * Number(data?.reqQuantity)}</span>
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col style={{ display: "flex", justifyContent: "left", alignItems: "center" }} className="ant-col-24">
            <Radio.Group onChange={onToggle} >
              <Space direction="vertical">
                <Radio value="PLSD123">PLSD123 (10% discount for orders above $5000)</Radio>
                <Radio value="PLSD456" style={{ marginLeft: "5px" }}>PLSD456 (15% discount for orders above $10000)</Radio>
              </Space>
            </Radio.Group>
          </Col>
        </Row>
        <br />

        <Row>
          <Col md={24}>
            <Form.Item >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button htmlType="submit" className="next-btn">Apply Coupon</Button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {
        state === true ?

          <div>
            <Row>
              <Col className="ant-col-24">
                <Row>
                  <Col lg={16}>
                    <div className="total">Ordered Amount</div>
                  </Col>
                  <Col lg={8}>
                    <div className="total-price" style={{ textAlign: "right" }}>
                      {total}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={16}>
                    <div className="total">Discount</div>
                  </Col>
                  <Col lg={8}>
                    <div className="total-price" style={{ textAlign: "right" }}>
                      {
                        values.discount ?
                          -values.discount
                          :
                          null
                      }

                    </div>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col lg={16}>
                    <div className="total">Amount Paid</div>
                  </Col>
                  <Col lg={8}>
                    <div className="total-price" style={{ textAlign: "right" }}>
                      {
                        values.discount ?
                          <>


                            <div> {parseFloat(total) - parseFloat(values.discount)}</div>

                          </>
                          :
                          null
                      }

                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={24}>
                    <Form.Item >
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button htmlType="submit" className="next-btn" onClick={Order}>Order</Button>
                      </div>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          :
          null
      }


    </div>
  )
}

export default withRouter(Checkout)
