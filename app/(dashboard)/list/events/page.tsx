import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  assignmentsData,
  eventsData,
  examsData,
  lessonsData,
  role,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Events = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const cols = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },

  {
    header: " Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const EventsListPage = () => {
  const renderRow = (item: Events) => (
    <tr
      key={item.id}
      className="text-sm hover:bg-sagorPurpleLight even:bg-slate-100 odd:bg-slate-50"
    >
      <td className="p-4 ">{item.title}</td>
      <td className="hidden md:table-cell ">{item.class} </td>
      <td className="hidden md:table-cell ">{item.date} </td>
      <td className="hidden md:table-cell ">{item.startTime} </td>
      <td className="hidden md:table-cell ">{item.endTime} </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/events/${item.id}`}>
            <button className="w-7 h-7  rounded-full flex items-center justify-center bg-sky">
              <Image src="/view.png" width={20} height={20} alt="view" />
            </button>
          </Link>

          {role === "admin" && (
            <button className="w-7 h-7  rounded-full flex items-center justify-center bg-sagorPurple">
              <Image src="/delete.png" width={20} height={20} alt="view" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-lg">
      {/* top section */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-gray-700 font-semibold hidden lg:block">
          All Events
        </h1>

        <div className="flex items-center gap-4 flex-col md:flex-row w-full lg:w-auto md:justify-end ">
          <TableSearch />

          <div className="flex  items-center gap-4  md:justify-end">
            <button className="w-7 h-7 bg-yellow-200 rounded-full flex items-center justify-center cursor-pointer">
              <Image src="/filter.png" width={15} height={15} alt="filter" />
            </button>
            <button className="w-7 h-7 bg-yellow-200 rounded-full flex items-center justify-center cursor-pointer">
              <Image src="/sort.png" width={15} height={15} alt="sort" />
            </button>
            {role === "admin" && (
              <button className="w-7 h-7 bg-yellow-200 rounded-full flex items-center justify-center cursor-pointer">
                <Image src="/plus.png" width={15} height={15} alt="plus" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* main table section */}
      <Table cols={cols} renderRow={renderRow} data={eventsData} />

      {/* bottom - pagination */}
      <Pagination />
    </div>
  );
};

export default EventsListPage;
