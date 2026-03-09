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

export function ChartContainer({ data, height = 300 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="newGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#69ceef" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#69ceef" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="#E7EBEC" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine ={false} tickMargin={14}/>
        <YAxis domain={[0, 400]} axisLine={false} tickLine={false} tickMargin={26}/>
        <Tooltip />

        <Area
          type="monotone"
          dataKey="New"
          stroke="#69ceef"
          strokeWidth={3}
          fill="url(#newGradient)"
          dot={{ r: 4 }}
        />

        <Area
          type="monotone"
          dataKey="Completed"
          stroke="#4f46e5"
          strokeWidth={3}
          fill="url(#completedGradient)"
          dot={{ r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}