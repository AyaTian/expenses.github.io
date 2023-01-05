import React from "react";
import "./ChartBar.css";

function CharBar(props) {
  const { value, maxValue } = props;
  let barFillHeight = "0%";
  if (value > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  console.log("barFillHeight", barFillHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default CharBar;
