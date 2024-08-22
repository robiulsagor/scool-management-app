"use client";

import Image from "next/image";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    present: 40,
    absent: 60,
  },
  {
    name: "Mon",
    present: 55,
    absent: 43,
  },
  {
    name: "Tue",
    present: 44,
    absent: 62,
  },
  {
    name: "Wed",
    present: 70,
    absent: 28,
  },
  {
    name: "Thu",
    present: 75,
    absent: 25,
  },
];

const AttendanceCharts = () => {
  return (
    <div className=" bg-white rounded-2xl ml-2 p-4 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-gray-700 font-semibold">Attendance</h2>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>

      {/* chart div */}
      <div className="h-[80%] w-full">
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#dfdfdf"
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#d1d3d7" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              tick={{ fill: "#d1d2d4" }}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: "15px", borderColor: "#ddd" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#fae27c"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            radius={[10, 10, 0, 0]}
            <Bar
              dataKey="absent"
              fill="#cfceff"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceCharts;
