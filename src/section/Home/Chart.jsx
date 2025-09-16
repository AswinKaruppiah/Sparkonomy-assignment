import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
} from "recharts";

export default function Chart() {
  const data = [
    {
      month: "Jan",
      expenses: 3100,
      growth: 10,
    },
    {
      month: "Feb",
      expenses: 2200,
      growth: 14,
    },
    {
      month: "Mar",
      expenses: 4100,
      growth: 20,
    },
    {
      month: "Apr",
      expenses: 3500,
      growth: 18,
    },
    {
      month: "May",
      expenses: 3000,
      growth: 22,
    },
    {
      month: "Jun",
      expenses: 3900,
      growth: 16,
    },
  ];

  return (
    <div className="chart-section">
      <ChartHeader />
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={data}
            margin={{
              top: 40,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#666" }}
              axisLine={{ stroke: "#e0e0e0" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tick={{ fontSize: 12, fill: "#666" }}
              axisLine={{ stroke: "#8134AF" }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 12, fill: "#666" }}
              axisLine={{ stroke: "#7f1e1d" }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="expenses"
              fill="url(#expenseGradient)"
              name="Expenses"
              radius={[4, 4, 0, 0]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="growth"
              stroke="#7f1e1d"
              strokeWidth={3}
              dot={{ fill: "#ffff", strokeWidth: 2, r: 4 }}
              name="momGrowth"
            />
            <defs>
              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8134AF" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#8134AF" stopOpacity={0.4} />
              </linearGradient>
            </defs>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const ChartHeader = () => {
  return (
    <div className="chart-header">
      <h6>Income Trend</h6>
      <p>Your monthly income and growth for the last 6 months.</p>
    </div>
  );
};
