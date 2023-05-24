import React from 'react'

const FCard = ({item}) => {
  return (
    <div className='f_card'>
        <div className='bw'>
            <div className='name'>{item.name}</div>
            <div className='date'>{item.date}</div>
        </div>
        <div className="enrolled">
           Courses Enrolled(6)
        </div>
        <div className="courses">
          {item.courses.map((item,index)=>{
            return <div key={index} className='course'>
                {item}
            </div>
          })}
        </div>
        <div className="anount">
        <span>Referral Amount</span><span>{item.amt}</span>
        </div>
    </div>
  )
}

export default FCard