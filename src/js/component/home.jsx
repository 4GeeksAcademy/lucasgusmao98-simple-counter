import React, { useEffect, useState } from 'react'
import Counter from './counter'


export default function Home() {

    const [seconds, setseconds] = useState(0)

    useEffect(() =>{
      let count = setInterval(()=>{
        setseconds((previousvalue) => 1+previousvalue);
        console.log(seconds)
    },1000)
    }, []
    ) 

  return (
    <div>
      <Counter seconds={seconds}/>
    </div>
  )
}
