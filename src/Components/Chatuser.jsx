import React from 'react'
import './Chatuser.css'
import blue from '../assets/blue_circle.png'
import Orange from '../assets/orange_cirlce.png'
import Pink from '../assets/pink_cirlce.png'

const Chatuser = () => {
  return (
<>
<div className="sidebar_userchat">
    <img className='chat_blue' src={blue}></img>
    <h1 className='chat_cn'>Cuvette Notes</h1>
</div>
<div className="sidebar_userchat">
    <img className='chat_orange' src={Orange}></img>
    <h1 className='chat_js'>Java Notes</h1>
</div>
<div className="sidebar_userchat">
    <img className='chat_pink' src={Pink}></img>
    <h1 className='chat_rj'>React Notes</h1>
</div>

</>
  )
}

export default Chatuser