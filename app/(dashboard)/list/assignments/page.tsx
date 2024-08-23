import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData, examsData, lessonsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const cols = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const AssignmentsListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="text-sm hover:bg-sagorPurpleLight even:bg-slate-100 odd:bg-slate-50"
    >
      <td className="p-4 ">{item.subject}</td>
      <td className="hidden md:table-cell ">{item.class} </td>
      <td className="hidden md:table-cell ">{item.teacher} </td>
      <td className="hidden md:table-cell ">{item.dueDate} </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/assignments/${item.id}`}>
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
          All Assignments
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
      <Table cols={cols} renderRow={renderRow} data={assignmentsData} />

      {/* bottom - pagination */}
      <Pagination />
    </div>
  );
};

export default AssignmentsListPage;
