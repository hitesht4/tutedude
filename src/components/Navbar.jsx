import React from 'react'
import Logo from '../assets/logo.png';
import Vector from '../assets/Vector.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav>
        <div className='logo' onClick={()=>navigate("/")}>
            <img src={Logo} alt="Logo" />
        </div>
        <ul className='navList'>
            <li>My Assignment</li>
            <li>Chat with Mentor</li>
            <li className="profile">
              <div><img src={Vector} alt="Profile" /></div>
              <div>ProfileName</div>
              <div className='drop'></div>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar