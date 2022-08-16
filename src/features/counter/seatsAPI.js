export const fetchSeatsServ = async () => {
  const res =  await fetch('http://localhost:5000/seats')
  const data = await res.json()
  data.forEach((e,i,a)=>{
    a[i] = Object.assign({}, e, {myRes: false}, {selPos: false}) 
    })
  return data
}