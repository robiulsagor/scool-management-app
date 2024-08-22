"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 3000,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 2898,
  },
  {
    name: "Mar",
    income: 8000,
    expense: 6800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 1708,
  },
  {
    name: "May",
    income: 1890,
    expense: 1200,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 1100,
  },
  {
    name: "Jul",
    income: 5490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 3300,
  },
  {
    name: "Sep",
    income: 5590,
    expense: 4300,
  },
  {
    name: "Oc",
    income: 8490,
    expense: 3300,
  },
  {
    name: "Nov",
    income: 9990,
    expense: 6600,
  },
  {
    name: "Dec",
    income: 9090,
    expense: 5000,
  },
];

const FinanceChart = () => {
  return (
    <div className=" bg-white rounded-2xl ml-2 p-4 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-gray-700 font-semibold">Attendance</h2>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>
      <div className="mt-5 w-full h-[90%]">
        <ResponsiveContainer>
          <LineChart
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
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="name" tickLine={false} tick={{ fill: "#ddd" }} />
            <YAxis tickLine={false} tick={{ fill: "#ddd" }} />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "20px" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#C3EBFA"
              strokeWidth={5}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#DFDEFF"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
