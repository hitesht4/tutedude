import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <div className="table">
          <div>
            <div className="head">Refferal Earning</div>
            <div className="text">₹2500</div>
          </div>
          <div>
            <div className="head">Total Refferal</div>
            <div className="text">7</div>
          </div>
          <div>
            <div className="head">Wallet Balance</div>
            <div className="text">₹500</div>
          </div>
          <div className="btn">
          <button className="withdraw">Withdraw Balance</button>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Dashboard;
