import React from "react";
import CharBar from "./CharBar";
import "./Chart.css";

function Chart(props) {
  //   const totalMaximum = Math.max(...props.dataPoints.map((data) => data.value));
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <CharBar
          key={data.label}
          value={data.value}
          label={data.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}

export default Chart;
