import React from 'react'
import './Sidebar.css'
import Create from './Create'
import Chatuser from './Chatuser'

const Sidebar = () => {
  return (
   <>

    <div className="sidebar_container">
<h1 className='heading'>Pocket Notes</h1>
<Create/>
<Chatuser />


    </div>
   </>
  )
}

export default Sidebar