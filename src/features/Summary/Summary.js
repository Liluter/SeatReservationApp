import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../counter/Counter.module.css';
import { selectAllSeats } from '../counter/seatsSlice';
import { Typography, List,Layout } from 'antd'

const {Header,Content} = Layout
const {Title} = Typography

export const Summary = ({seats}) => {
    const Seats = useSelector(selectAllSeats)
    return (
        <Layout >
            <Header style={{color:"#ddd"}} >
            Your reservation was successful.
            </Header>
            <Content >
                <List 
                    size="large"
                    dataSource={Seats.filter((seat) => (seat.myRes)).map(seat => (`row: ${seat.cords.x} , seat: ${seat.cords.y} ,   ${seat.id}`))}
                    renderItem={(item=>(<List.Item>{item}</List.Item>))}
                    >
                </List>
                <Title >Thank you! If you have any problems, please contact the administration department.</Title>
            </Content>
        </Layout>
    )
}