import React from 'react'
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'
import './Home.css'
// import Message from './Components/Message'
const Home = () => {
  return (
<>
<div className="home_conatiner">
<Sidebar/>
<Chat/>
{/* <Message/> */}
</div>
</>
  )
}

export default Home