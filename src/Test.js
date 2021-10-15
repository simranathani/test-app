import React, {  useState } from 'react'
import Products from './Products'
import { Row, Col, Card, InputNumber, Button, message} from 'antd'
import URL from './images/16Gb.jpg'
import './Test.css'
import { withRouter } from 'react-router-dom'
const { Meta } = Card
const Test = (props) => {

  const [details,setDetails] = useState()

  const onChange = (details,value) => {
    setDetails({
      details : details,
      reqQuantity : value
    })
  }

  const Checkout = _ => {
    if(details){
   props.history.push('/checkout',{details : details})
    }else{
      message.error('Please Select Product for checkout')
    }
  }
  return (
    <>
      <Row gutter={24}>
        {Products?.map((c) => (
          <Col md={8} lg={6}>
            <div className="section" >
              <Card

                cover={
                  <>
                    <div className="wrapper" >
                      <img alt="example" src={URL} width="100%" height="100%"/>
                      <div class="thumbnail-overlay">
                        {/* <Button style={{ cursor: "not-allowed" }} className="cart-btn">Out of stock</Button> */}

                      </div>
                    </div>

                  </>
                }
              >
                <Meta title={<><h4 >{c?.name}</h4></>}  description={<><div className="price"> ${c?.price} </div>
                <div><InputNumber min={0} defaultValue={0} onChange={(value) => onChange(c,value)}/></div></>}/>
              </Card>
            </div>
          </Col>
        ))}

      </Row>
      <Row>
        <Col className="ant-col-24">
          <Button className="next-btn" onClick={Checkout}>Checkout</Button>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(Test)
