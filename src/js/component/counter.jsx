import React from 'react'

export default function Counter(props) {
    // this is the javascript part
  return (
    // this is the html part and if you want to use javascript you need curly brackets
    <div className='d-flex justify-content-center'>
        <h1>{Math.floor(props.seconds / 100000) % 10}</h1>
        <h1>{Math.floor(props.seconds / 10000) % 10}</h1>
        <h1>{Math.floor(props.seconds / 1000) % 10}</h1>
        <h1>{Math.floor(props.seconds / 100) % 10}</h1>
        <h1>{Math.floor(props.seconds / 10) % 10}</h1>
        <h1>{Math.floor(props.seconds / 1) % 10}</h1>
        
    </div>
  )
}
