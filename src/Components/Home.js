import React from 'react'
import "../App.css"
export default function Home() {
  return (
    <div className='home1'>
       <div style={{paddingTop:'40vh'}}>
       <h2>Hi ! This is Quote Generator</h2>
      <p> Welcome to the Home page</p>
       <a href='/quote' >Generate Quotes</a>
       </div>
    </div>
  )
}
