import React from 'react'
import styles from '../counter/Counter.module.css';

const Seat = ({seat, count,isChecked, onToggle}) => {


  return (
    <div
    className={`${styles.Seat} ${seat.reserved ? styles.reserved : ' '} 
    ${seat.myRes ? styles.ownReservation : ' '} 
    ${seat.selPos === true ? styles.possible : ' '} 
    ${( (seat.maxAval >= count || !isChecked)  && seat.maxAval !== 0) ? styles.available : ' '} `} 
    style={{gridColumn: seat.cords.y + 1,gridRow: seat.cords.x + 1}} 
    onClick={()=>onToggle(seat.id)} >
      {" "}
      {/* {seat.id}  */}
        {/* <p> {seat.cords.x} {seat.cords.y} m{seat.maxAval}</p> */}
    </div>
  )
  }
export default Seat