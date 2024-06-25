'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  { month: 'January', sales: 4000 },
  { month: 'February', sales: 3000 },
  { month: 'March', sales: 2000 },
  { month: 'April', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'June', sales: 2390 },
  { month: 'July', sales: 3490 },
  { month: 'August', sales: 4300 },
  { month: 'September', sales: 4100 },
  { month: 'October', sales: 4700 },
  { month: 'November', sales: 4500 },
  { month: 'December', sales: 5000 },
];

const SalesLineChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={salesData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="sales"
        stroke="#888888"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default SalesLineChart;
