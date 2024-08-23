"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    time: "12:00 PM - 3:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    time: "2:00 PM - 5:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    time: "10:00 PM - 1:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="p-4 rounded-md bg-white">
      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between my-4">
        <h1 className="text-lg text-gray-700 font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      {events.map((event) => (
        <div
          key={event.id}
          className=" my-4 border-2 border-t-4 p-3 rounded-lg even:border-t-sagorPurple odd:border-t-sky"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-sm text-gray-700 font-bold">{event.title}</h1>
            <p className="text-xs text-gray-300">{event.time}</p>
          </div>
          <p className="text-sm text-gray-400 block mt-3">
            {event.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default EventCalendar;
