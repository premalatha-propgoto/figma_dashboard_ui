"use client";
import * as React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export function ChartContainer({ data, height = 300 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid stroke="#f1f5f9" horizontal={false} />
        <XAxis dataKey="month" />
        <YAxis domain={[0, 400]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="New"
          stroke="#69ceef"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="Completed"
          stroke="#4f46e5"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
