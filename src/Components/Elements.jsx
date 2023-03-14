import React from 'react'
import './Element.css';
const Elements = (props) => {
  return (
    <div  id='elmnt'>
        <div className='elDiv' id='d1'><b>{props.name}</b></div>
        <div className='elDiv' id='d2'><i>{props.region}</i></div>
        <div className='elDiv' id='d3'>{props.area}</div>
    </div>
  )
}

export default Elements