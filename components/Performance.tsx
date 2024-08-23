"use client";

import Image from "next/image";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400, fill: "#c3ebfa" },
  { name: "Group B", value: 300, fill: "#fae27c" },
];

const Performance = () => {
  return (
    <div className="p-4 rounded-md bg-white  h-80 relative">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold text-gray-700">Performance</h1>
        <Image src="/moreDark.png" width={16} height={16} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <h3 className="text-gray-400 text-sm ">out of 10 LTS</h3>
      </div>

      <h1 className="text-center text-gray-500 font-semibold text-lg absolute bottom-16 mx-auto left-0 right-0">
        1st Semester - 2nd Semester
      </h1>
    </div>
  );
};

export default Performance;
