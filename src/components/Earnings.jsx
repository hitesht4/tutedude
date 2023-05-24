import React from "react";
import Dashboard from "./Dashboard";
import Code from "./Code";

const Earnings = () => {
  return (
    <div className="earnings">
      <div className="dashboard_container">
        <Dashboard />
      </div>
      <div className="code_container">
        <Code />
      </div>
    </div>
  );
};

export default Earnings;
