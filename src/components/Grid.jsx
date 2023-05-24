import React from 'react'
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';
import Card from './Card';
import { useNavigate } from 'react-router-dom';


const cardArr = [
    { img: one, heading: "Invite your Friends", text: "Share the link tutedude.com with your friends" },
    { img: two, heading: "Friend purchases any course", text: "Using your REFERRAL CODE in the payments page" },
    { img: three, heading: "You get ₹ 200 as referral money", text: "On total purchase the friend makes, into your wallet" },
    { img: four, heading: "Your Friend gets ₹ 200 Off ", text: "On his overall fee on successful purchase using your referral code " },
    { img: five, heading: "Transfer money from wallet", text: "When the wallet balance reaches ₹200 or more, you can withdraw it" },
  ];

const Grid = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='grid'> 
    <div className="grid_container">
    {cardArr.map((item,index)=>(
                <Card key={index} cardItem={item}/>
            ))}
    </div>
    </div>
    <div className='link' onClick={()=>navigate("/friends-referred")}>Friends Who Enrolled</div>
    <div className='link'>Terms & Conditions</div>
    </>
  )
}

export default Grid