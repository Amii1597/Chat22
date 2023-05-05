import React from 'react'
import blue from '../assets/blue_circle.png'
import send from '../assets/Send.png'
import './Message.css'
const Message = () => {
  return (
<>
<div className='Header_message' style={{display:'flex'}}>
    <img style={{height:'70px',width:'70px',padding:'10px'}} src={blue}></img>
    <h3 className='heading_msg'>Cuvette Notes</h3>
    <div className="msg_body">
       <input className='input_msg' placeholder='Enter Your Text Here........  '>
        
       </input>     
       <img src={send} className='send_msg'/>
    </div>
</div>
</>
  )
}

export default Message