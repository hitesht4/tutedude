import React from "react";
import FCard from "./FCard";

const cardArr = [
  {
    name: "Dhiraj Saxsena",
    date: "14 Sep, 2022",
    courses: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
   
      "Python",
      "MERN",
      "Java",
    ],
    amt: "₹185",
  },
  {
    name: "Subhash Mishra",
    date: "15 Sep, 2022",
    courses: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
    
      "Python",
      "MERN",
      "Java",
    ],
    amt: "₹485",
  },
  {
    name: "Prafull Kumar",
    date: "16 Sep, 2022",
    courses: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
    ],
    amt: "₹485",
  },
];

const Slider = () => {
  return (
    <>
    <div className="slider">
      <div className="ENroll">Friends who enrolled <span>(3)</span></div>
      <div className="cardSlider">
        {cardArr.map((item,index)=>(
            <FCard item={item} key={index}/>
        ))}
      </div>
    </div>
    <div className="link3">Terms & Conditions</div>
    </>
  );
};

export default Slider;
