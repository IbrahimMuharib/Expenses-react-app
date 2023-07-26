import "./ChartBar.css";

function ChartBar({
  value,
  maxValue,
  label,
}: {
  value: number;
  maxValue: number;
  label: string;
}) {
  let barPercent = "0%";

  if (maxValue > 0) {
    barPercent = `${Math.round((value / maxValue) * 100)}%`;
  }
  console.log(barPercent);

  return (
    <div className="chart-bar">
      <div className="chart-bar__label">{label}</div>
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barPercent }}></div>
      </div>
    </div>
  );
}

export default ChartBar;
