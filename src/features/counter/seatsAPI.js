export const fetchSeatsServ = async () => {
  const res =  await fetch('db.json')
  const data = await res.json()
  data.seats.forEach((e,i,a)=>{
    a[i] = Object.assign({}, e, {myRes: false}, {selPos: false}) 
    })
  return data.seats
}
//http://localhost:5000/seats its from local server
// db.json from local file in public directory