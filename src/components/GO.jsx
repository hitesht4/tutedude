import React from 'react'
import arrow from '../assets/Arrow.png';
import { useNavigate } from 'react-router-dom';

const GO = () => {
    const navigate=useNavigate();
  return (
    <div className='back_section'>
        <div className="flex3" onClick={()=>navigate("/")}>
            <div className='arrow'><img src={arrow} alt="" /></div>
            <div className='text_go'>go back</div>
        </div>
    </div>
  )
}

export default GO