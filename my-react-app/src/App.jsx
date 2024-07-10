import React, { useState } from 'react'
// import Home from './Home'



function App() {
  // let user="rahul";
 let [count,setcount] =useState("bhopal");
  let[color,setColor]=useState("red");
let [time,setTime]=useState();

 function fun()
 {
  setcount("delhi");
 }
 setInterval(()=>
{
  let date=new Date().toLocaleTimeString()
  setTime(date);
},

)
  return (
   


    <>
    <div style={{backgroundColor:"red"}}>
      <p>{time}</p>
      <p>{count}</p>
      
<button onClick={fun}>add</button>
   

    </div>
    </>
  )
}

export default App