import { GoDotFill } from "react-icons/go";

import "./index.css";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    name: "6/30/2024 - 7/6/2024",
    orders: 4,
    sales: 1404,
    avgOrderValue: 351,
  },
  {
    name: "7/7/2024 - 7/13/2024",
    orders: 2,
    sales: 800,
    avgOrderValue: 400,
  },
  {
    name: "7/21/2024 - 7/27/2024",
    orders: 2,
    sales: 500,
    avgOrderValue: 250,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const item = data.find((each) => each.name === label);
    const avgValue = item.avgOrderValue;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="para">
          <GoDotFill className="dot1" /> {`Orders - ${payload[0].value}`}
        </p>
        <p className="para">
          <GoDotFill className="dot2" /> {`Sales - ${payload[1].value}`}
        </p>
        <p className="para">
          <GoDotFill className="dot3" /> Avg order value - {avgValue}
        </p>
      </div>
    );
  }
  return null;
};

const formatInK = (value) => `${value / 1000}k`;

const GraphChart = () => {
  return (
    <ResponsiveContainer
      width={750}
      height={400}
      style={{ alignSelf: "center", boxSizing: "border-box", flexShrink: 0 }}
    >
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 55,
          left: 55,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend verticalAlign="top" align="center" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" tickFormatter={formatInK} />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip
          content={<CustomTooltip />}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
          itemStyle={{ color: "#000" }}
          labelStyle={{ fontWeight: "bold", color: "#333" }}
        />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#F19336"
          dot={{
            r: 3,
            stroke: "#F19336",
            strokeWidth: 2,
          }}
          activeDot={{
            r: 6,
            fill: "#F19336",
            stroke: "#F19336",
            strokeWidth: 2,
          }}
          yAxisId="right"
        />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#47A5A8"
          dot={{
            r: 3,
            stroke: "#47A5A8",
            strokeWidth: 2,
          }}
          activeDot={{
            r: 6,
            fill: "#47A5A8",
            stroke: "#47A5A8",
            strokeWidth: 2,
          }}
          yAxisId="left"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphChart;
