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
  // Fetch local db file
  // let data
  // const collect = (arg) => {
  //   data = arg
  //   console.log(data.seats[0])
  // }
  // useEffect(()=> {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     collect(tasksFromServer)
  //   }
  //   getTasks()
  // },[] )

  // // Fetch Tasks
  // const fetchTasks = async () => {
  //   const res = await fetch('db.json')
  //   const data = await res.json()

  //   return data
  // }

  const dispatch = useDispatch();
  const countActual = useSelector(countState)
  const seatStatus = useSelector((state) => state.seats.status);
  const handleCount = (num) => {
    dispatch(countIncrementByAmount(num))
  }
  
  useEffect(() => {
    if (seatStatus === "idle") {
      dispatch(fetchSeats())
    }  
  })


  return (
          <>
            <Header style={{color:"#ddd"}}>
            <Row justify="center"><Col style={{color:"#ddd", fontSize:"24px"}} ><span role="img" aria-label="smile">😃</span> Welcome to our seat reservation application <span role="img" aria-label="smile">😃</span></Col></Row>
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

