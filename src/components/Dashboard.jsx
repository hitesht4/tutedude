import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="frame1">
        <div className="dasboard_title">Referral Earning</div>
        <div className="dashboard_content">₹ 2500</div>
      </div>
      <div className="frame2">
        <div className="dasboard_title">Total Referrals</div>
        <div className="dashboard_content">7</div>
      </div>
      <div className="frame3">
        <div className="dasboard_title">Wallet Balance</div>
        <div className="dashboard_content">₹ 500</div>
      </div>
      <div className="withdraw">
        <div>Withdraw Balance</div>
      </div>
    </div>
  );
};

export default Dashboard;
