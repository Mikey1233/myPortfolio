import React from 'react'
import './maingrid.css'
function Maingrid({title,text,pic}) {
  return (
    <div className='main-box'>
      <div className='main-box-text'>
             <p>{title}</p>
             <span>{text}</span>
      </div>
      <div className='main-box-img'>
        <img src={pic} alt='project-pic'/>
      </div>
    </div>
  )
}

export default Maingrid
