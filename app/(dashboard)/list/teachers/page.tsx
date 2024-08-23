import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const cols = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const TeachersListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="text-sm hover:bg-sagorPurpleLight even:bg-slate-100 odd:bg-slate-50"
    >
      <td className="flex gap-4 p-4 items-center ">
        <Image
          src={item.photo}
          width={40}
          height={40}
          alt={item.name}
          className="md:hidden xl:block rounded-full w-10 h-10 object-cover"
        />

        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name} </h3>
          <span className="text-xs text-gray-400">{item?.email} </span>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId} </td>
      <td className="hidden md:table-cell">{item.subjects.join(",")} </td>
      <td className="hidden md:table-cell">{item.classes.join(",")} </td>
      <td className="hidden md:table-cell">{item.phone} </td>
      <td className="hidden md:table-cell">{item.address} </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teacher/${item.id}`}>
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
          All Teachers
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
      <Table cols={cols} renderRow={renderRow} data={teachersData} />

      {/* bottom - pagination */}
      <Pagination />
    </div>
  );
};

export default TeachersListPage;
