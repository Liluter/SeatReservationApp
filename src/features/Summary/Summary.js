import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllSeats } from '../counter/seatsSlice';
import { Typography, List, Layout, Row, Col} from 'antd'

const {Header,Content} = Layout
const {Title, Text} = Typography

export const Summary = ({seats}) => {
    const Seats = useSelector(selectAllSeats)
    return (
    <>
        <Header  >
        <Text style={{color:"#ddd", fontSize:"24px"}}>Your reservation was successful.</Text>
        </Header>
        <Content >
            <Row justify="center">
                <Col span={22}>
                        <List 
                            size="large"
                            footer={<Title level={4} >Thank you! If you have any problems, please contact the administration department.</Title>}
                            dataSource={Seats.filter((seat) => (seat.myRes)).map(seat => (`- row: ${seat.cords.x} , seat: ${seat.cords.y} ,   ${seat.id}`))}
                            renderItem={(item=>(<List.Item>{item}</List.Item>))}
                            >
                        </List>
                </Col>
            </Row>
        </Content>
    </>
    )
}