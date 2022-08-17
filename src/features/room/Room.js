import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import "antd/dist/antd.css";
import styles from '../counter/Counter.module.css';
import {Layout, Space, List, Col, Row } from 'antd'
import { selectAllSeats,
  seatsUpdate,
  countState
} from '../counter/seatsSlice';

import Seat from '../seat/Seat'

const { Header, Footer, Content } = Layout;

export const Room = ({isChecked}) => {

const dispatch = useDispatch()
const SeatsPrime = useSelector(selectAllSeats)
const countActual = useSelector(countState)
const [buffer, setBuffer] = useState([])
const Seats = [...SeatsPrime]

useEffect(() => {
  if (isChecked) {
    if (buffer.length === 0) {
      Seats.forEach((e,i,a)=> {
        a[i] = Object.assign({}, a[i], {selPos: false})
      })
    } else {
      if (Math.abs( (Seats[Seats.indexOf(buffer[0]) -1] || Seats[Seats.indexOf(buffer[0])]).cords.y  - Seats[Seats.indexOf(buffer[0])].cords.y) <= 1 ) {
        Seats.forEach((e,i,a)=>{
        if ((i === Seats.indexOf(buffer[0])-1) && !e.reserved===true) {
          a[i] = Object.assign({}, a[i], {selPos: true})
        }})
      }
      if (Math.abs( (Seats[Seats.indexOf(buffer[buffer.length-1])+1] || Seats[Seats.indexOf(buffer[buffer.length-1])]).cords.y - Seats[Seats.indexOf(buffer[buffer.length-1])].cords.y) <= 1 ) {
        Seats.forEach((e,i,a)=>{
          if ((i === Seats.indexOf(buffer[buffer.length-1])+1) && !e.reserved===true) {
            a[i] = Object.assign({}, a[i], {selPos: true})
          } 
          })
      }
    buffer.forEach((b)=> {
      Seats.forEach((e,i,a)=>{
        if (i === Seats.indexOf(b)) {
          a[i] = Object.assign({}, a[i], {selPos: false})
        } 
      })
    })
    if (buffer.length === +countActual) {
      console.log('buffer full !')
      Seats.forEach((e,i,a)=>{
      a[i] = Object.assign({}, a[i], {selPos: false})
      })
    }
    dispatch(seatsUpdate(Seats))
    }

  } else {
    
  }

},[buffer,countActual,isChecked,dispatch])


const toggleReservation = (id) => {
  if (isChecked) {
    if (buffer[buffer.length - 1]) {
      if (( Math.abs([...Seats.filter((seat) => seat.id === id )][0].cords.y - buffer[buffer.length -1 ].cords.y) <= 1) || ( Math.abs([...Seats.filter((seat) => seat.id === id )][0].cords.y - buffer[0].cords.y) <= 1) ){
        if (buffer[0].cords.x === [...Seats.filter((seat) => seat.id === id )][0].cords.x) {
          if ([...Seats.filter((seat) => seat.myRes === true )].length < countActual) {
            Seats.forEach((e,i,a)=>{
              (e.id === id && !e.reserved && e.maxAval>=countActual ) ?  a[i] = Object.assign({}, e, {myRes: !a[i].myRes || false}) : a[i] = Object.assign({}, e, { myRes: a[i].myRes || false},{selPos: false})
            })
          } else if ([...Seats.filter((seat) => seat.id === id )][0].myRes === true) {
            Seats.forEach((e,i,a)=>{
              (e.id === id && !e.reserved && +e.maxAval>=+countActual && (e.id === buffer[buffer.length-1].id || e.id === buffer[0].id) ) ?  a[i] = Object.assign({}, e, {myRes: !a[i].myRes || false}) : a[i] = Object.assign({}, e, { myRes: a[i].myRes || false},{selPos: false})
            })
          }
          setBuffer([ ...Seats.filter((seat) => seat.myRes === true ) ])
        }
      } else {
        setBuffer([ ...Seats.filter((seat) => seat.myRes === true ) ])
      }
      setBuffer([ ...Seats.filter((seat) => seat.myRes === true ) ])
      
    } else {
      if ([...Seats.filter((seat) => seat.myRes === true )].length < countActual) {
        Seats.forEach((e,i,a)=>{
          (e.id === id && !e.reserved && e.maxAval>=countActual ) ?  a[i] = Object.assign({}, e, {myRes: !a[i].myRes || false}, {selPos: false}) : a[i] = Object.assign({}, e, { myRes: a[i].myRes || false}, {selPos: false})
        })
      } else if ([...Seats.filter((seat) => seat.id === id )][0].myRes === true) {
        Seats.forEach((e,i,a)=>{
          (e.id === id && !e.reserved && e.maxAval>=countActual ) ?  a[i] = Object.assign({}, e, {myRes: !a[i].myRes || false}, {selPos: false}) : a[i] = Object.assign({}, e, { myRes: a[i].myRes || false}, {selPos: false})
        })
      }
      setBuffer([ ...Seats.filter((seat) => seat.myRes === true ) ])
    }
  } else {
    if ([...Seats.filter((seat) => seat.myRes === true )].length < countActual) {
      Seats.forEach((e,i,a)=>{
        (e.id === id && !e.reserved ) ?  a[i] = Object.assign({}, e, {myRes: !a[i].myRes || false}, {selPos: false}) : a[i] = Object.assign({}, e, { myRes: a[i].myRes || false}, {selPos: false})
      })
    } else if ([...Seats.filter((seat) => seat.id === id )][0].myRes === true) {
      Seats.forEach((e,i,a)=>{
        (e.id === id && !e.reserved  ) ?  a[i] = Object.assign({}, e, {myRes: !a[i].myRes || false}, {selPos: false}) : a[i] = Object.assign({}, e, { myRes: a[i].myRes || false}, {selPos: false})
      })
    }
  }
  dispatch(seatsUpdate(Seats))
}



let status = (
  (countActual - [...Seats.filter((seat) => seat.myRes === true )].length)
)

let content

content = (
  <div className={styles.room} >
      {Seats.map((seat) => (
        <Seat key={seat.id} data-cy seat={seat} isChecked={isChecked} count={countActual} onToggle={toggleReservation}  >
        </Seat>
      ))}
    </div>
  )
  

let header

if (countActual > 0 && countActual <=5) {
  header = (`Places available for ${countActual} people :`)
} else if ( countActual <=0 ) {
  header = (`Please enter the number of seats greater than 0.`)
} else {
  header = (`The maximum number of seats next to each other is 5.`)
}


  return (
    <Layout  >
      <Space direction="vertical" size="middle" >
        <Header  theme="light" style={{color:"#ddd"}} >
          <Row >
            <Col span={8} offset={5}>{header}</Col>
            <Col span={2} offset={6}  ><div style={{display: 'flex', alignItems: 'center'}}> <div className={`${styles.SeatInfo}`} style={{fontSize:"24px",color:"#111"}}>{status}</div> </div></Col>
          </Row>
        </Header>
        <Content>
          <Layout><Row justify="center" align="middle" style={{height:"100%"}}><Col>{content}</Col></Row></Layout>
        </Content>
        <Footer style={{width:"100%"}}>
          <Layout>
            <Row justify="center" align="middle"  >
                <Col span={4}><div style={{display: 'flex', alignItems: 'center'}}> <div className={`${styles.Seat}`} style={{float: 'left', marginRight:"12px"}}></div>Miejsca dostępne </div></Col>
                <Col span={4}><div style={{display: 'flex', alignItems: 'center'}}> <div className={`${styles.Seat} ${styles.reserved}`} style={{float: 'left', marginRight:"12px"}}></div >Miejsca zarezerwowane </div></Col>
                <Col span={4}><div style={{display: 'flex', alignItems: 'center'}}> <div className={`${styles.Seat} ${styles.ownReservation}`} style={{float: 'left', marginRight:"12px"}}></div>Twój Wybór</div></Col>
                <Col span={4}><Link  to="/summary"><button className={styles.buttonClear}>Rezerwuj</button></Link></Col>
            </Row>
          </Layout>
        </Footer>
      </Space>
    </Layout>
  )
}
