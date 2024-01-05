import React from 'react'
import './minorgrid.css'
function Minorgrid({title,text,pic}) {
  return (
    <div className='grid-box'>
      <div className='grid-box-text'>
             <p>{title}</p>
             <span>{text}</span>
      </div>
      <div className='grid-box-img'>
        <img src={pic} alt='project-pic'/>
      </div>
    </div>
  )
}

export default Minorgrid
