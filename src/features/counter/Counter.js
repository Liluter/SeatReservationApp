import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {
  fetchSeats,
  countState,
  countIncrementByAmount
} from './seatsSlice';
import "antd/dist/antd.css";
import {Button,Form, InputNumber, Checkbox, Col,Row , Layout} from 'antd'


const {Content, Header } = Layout;

export function Counter({isChecked , handleChange}) {
  const dispatch = useDispatch();
  const countActual = useSelector(countState)
  const seatStatus = useSelector((state) => state.seats.status);
  const handleCount = (num) => {
    dispatch(countIncrementByAmount(num))
    // console.log(num, countActual)
  }
  
  useEffect(() => {
    if (seatStatus === "idle") {
      dispatch(fetchSeats())
    }  
  })


  return (
          <>
            <Header style={{color:"#ddd"}}>
            <Row justify="center"><Col >😃 Welcome to our seat reservation application 😃</Col></Row>
            </Header>
            <Content   >
              <Row justify="center" align="middle" style={{height:"100%"}}>
                <Col justify="left" align="middle" span={6}>
                  <Form
                  size="large"
                  layout='horizontal'
                  >
                    <Form.Item 
                    labelCol={{
                      span:14
                    }}
                    wrapperCol={{ span: 10 }}
                    labelAlign="left"
                    label="Number of seats:">
                      <InputNumber
                        style={{ width: '100%' }}
                        size="large"
                        value={countActual}
                        min={0}
                        max={isChecked ? 5 : 40 }
                        onChange={handleCount}
                        status={(+countActual===0)||(+countActual>5 && isChecked) ? "warning" : ""}
                      />
                    </Form.Item>
                    <Form.Item >
                      <Checkbox  checked={isChecked} onChange={handleChange}>
                      Should the seats be next to each other?
                      </Checkbox>
                    </Form.Item>
                    <Form.Item>
                      <Link style={{width:'100%'}} to="/room"><Button size="large" block>Pick a seat</Button></Link>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Content>
          </>
  );
}
