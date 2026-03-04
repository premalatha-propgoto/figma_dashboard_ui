"use client";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
export default function MiniLineChart({
  data,
  height = 80,
  lineColor = "#3b82f6",
}) {
  if (!data || !data.length) return null;

  const numericKey = Object.keys(data[0]).find(
    (key) => typeof data[0][key] === "number",
  );

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <Tooltip cursor={false} />
        <Line
          type="monotone"
          dataKey={numericKey}
          stroke={lineColor}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
