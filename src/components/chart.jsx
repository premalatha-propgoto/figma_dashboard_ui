"use client";
import * as React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function ChartContainer({ data, height = 300, dataKey = "Temperature", xKey = "date" }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#69ceef" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#69ceef" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="#E7EBEC" vertical={false} />
        <XAxis dataKey={xKey} axisLine={false} tickLine={false} tickMargin={14} />
        <YAxis axisLine={false} tickLine={false} tickMargin={26} />
        <Tooltip />

        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#69ceef"
          strokeWidth={3}
          fill="url(#temperatureGradient)"
          dot={{ r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}