const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "lorem ipsum dolor sit amet consectetur, consectetur adipiscing elit...",
    date: "2025-01-31",
    bg: "bg-skyLight",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "lorem ipsum dolor sit amet consectetur, consectetur adipiscing elit...",
    date: "2026-03-25",
    bg: "bg-sagorPurpleLight",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "lorem ipsum dolor sit amet consectetur, consectetur adipiscing elit...",
    date: "2025-10-15",
    bg: "bg-sagorYellowLight",
  },
];

const Announcement = () => {
  return (
    <div className="bg-white p-3 rounded-lg">
      <div className="flex items-center justify-between text-gray-700 mb-4">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <p className="text-xs text-gray-300">View All</p>
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event, index) => (
          <div className={`p-2 lg:p-5  rounded-lg ${event.bg}`} key={index}>
            <div className="flex items-center justify-between">
              <h1 className="text-sm  text-gray-600 font-bold">
                {event.title}
              </h1>
              <span className="text-xs bg-white p-1 text-gray-400 rounded-lg">
                {event.date}
              </span>
            </div>
            <p className="text-xs lg:text-sm text-gray-500 mt-2">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
