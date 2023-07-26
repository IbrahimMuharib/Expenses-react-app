import "./Chart.css";

import ChartBar from "./ChartBar";

function Chart({ dataPoints }: { dataPoints: any }) {
    let maxValue = Math.max(...dataPoints.map((dataPoint:any) => dataPoint.value));

  return (
    <div className="chart">
      {dataPoints.map((datapoint: any, index: number) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
