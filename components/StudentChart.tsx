"use client";

import Image from "next/image";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#fff",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#c3ebfa ",
  },
];

const StudentChart = () => {
  return (
    <div className=" bg-white rounded-2xl mr-2 p-4 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-gray-700 font-semibold">Students</h2>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>
      {/* chart div */}
      <div className="h-[66%] w-full  relative">
        <ResponsiveContainer>
          <RadialBarChart
            width={500}
            height={300}
            cx={"50%"}
            cy={"50%"}
            innerRadius={"40%"}
            outerRadius={"100%"}
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          alt="male female"
          src="/maleFemale.png"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
        />
      </div>

      <div className="flex justify-around items-center my-1">
        <div>
          <div className="bg-sky w-5 h-5 rounded-full" />
          <h3 className="text-base font-semibold text-gray-600 mt-2">1,234</h3>
          <span className="text-gray-400 text-[11px] font-semibold">
            Boys(55%)
          </span>
        </div>
        <div>
          <div className="bg-sagorYellow w-5 h-5 rounded-full" />
          <h3 className="text-base font-semibold text-gray-600 mt-2">1,234</h3>
          <span className="text-gray-400 text-[11px] font-semibold">
            Girls(45%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentChart;
