import React, { useState } from 'react'
import './Create.css'
import Adduser from './Adduser';
const Create = () => {
  const [showModal,setShowModal]=useState(false);
  const closeModel=()=>setShowModal(false);
  return (
    <>
<button  onClick={() => setShowModal(true)} className='create-btn'> +  Create Notes Group</button>
{showModal && <Adduser closeModal={closeModel}/>  }

    </>
  )
}


export default Create