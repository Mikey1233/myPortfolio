import React from 'react'
import './minorgrid.css'
function Minorgrid({title,text,pic,site,check}) {
  return (
    <a style={{padding:0,margin:0,fontSize:'unset'}} href={`${site}`} target='blank'>
 <div className='grid-box'>
      <div className='grid-box-text'>
             <p>{title}{check ? <span className='pro' style={{color:'gray'}}>inProgress</span>:''}</p>
             <span>{text}</span>
             
      </div>
      <div className='grid-box-img'>
        <img src={pic} alt='project-pic'/>
      </div>
    </div>
    </a>
   
  )
}

export default Minorgrid
