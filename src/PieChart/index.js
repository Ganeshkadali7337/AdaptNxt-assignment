import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { GoDotFill } from "react-icons/go";

import "./index.css";

const data = [
  { name: "Shopify Store", value: 1176 },
  { name: "WooCommerce Store", value: 1483 },
];

const COLORS = ["#2CDED5", "#FA7E7E"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={14}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const CustomLegend = () => {
  return (
    <div className="legend-container">
      <p className="pi-para1">
        <GoDotFill className="pi-dot1" /> {data[1].name}
      </p>
      <p className="pi-para2">
        <GoDotFill className="pi-dot" /> {data[0].name}
      </p>
    </div>
  );
};

const PieChartSales = () => {
  const totalSales = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <ResponsiveContainer
      height={400}
      width={400}
      style={{ alignSelf: "center", boxSizing: "border-box", flexShrink: 1 }}
    >
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          startAngle={90}
          endAngle={450}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          align="center"
          verticalAlign="bottom"
          content={<CustomLegend />}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="total-sales-label"
          style={{ fontSize: 24, fontWeight: "bold" }}
        >
          {totalSales}
        </text>
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="total-sales-text"
          style={{ fontSize: 12, fill: "#666" }}
        >
          Total
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartSales;
