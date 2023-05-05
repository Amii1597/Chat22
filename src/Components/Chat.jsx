import React from 'react'
import './Chat.css'
import imagechat from '../assets/chatimg.png'
import lock from '../assets/Lock.png'
const Chat = () => {
  return (
 <>
 <div className="chat_contianer">
    <img  className='chat_image' src={imagechat}/>
    <h1 className='chat_heading'>Pocket Notes</h1>
    <h2 className='chat_subheading'>Send and receive messages without keeping your phone online.
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h2>
<div className="chat_endtoend">
<img className='chat_lock' src={lock}/>
<h5 className='chat_end'>end-to-end encrypted</h5>
</div>
 </div>
 </>
  )
}

export default Chat