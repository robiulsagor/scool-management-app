import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  assignmentsData,
  examsData,
  lessonsData,
  resultsData,
  role,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
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
    className: "hidden lg:table-cell",
  },
  {
    header: "Student",
    accessor: "student",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell",
  },
  {
    header: "Type",
    accessor: "type",
    className: "hidden lg:table-cell",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const ResultsListPage = () => {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="text-sm hover:bg-sagorPurpleLight even:bg-slate-100 odd:bg-slate-50"
    >
      <td className="p-4 ">{item.subject}</td>
      <td className="hidden md:table-cell ">{item.class} </td>
      <td className="hidden lg:table-cell ">{item.teacher} </td>
      <td className="hidden md:table-cell ">{item.student} </td>
      <td className="hidden lg:table-cell ">{item.date} </td>
      <td className="hidden lg:table-cell ">{item.type} </td>
      <td className="hidden md:table-cell ">{item.score} </td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" ||
            (role === "teacher" && (
              <>
                <FormModal table="result" type="update" data={item} />
                <FormModal table="result" type="delete" id={item.id} />
              </>
            ))}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-lg">
      {/* top section */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-gray-700 font-semibold hidden lg:block">
          All Results
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
            {role === "admin" ||
              (role === "teacher" && (
                <FormModal table="result" type="create" />
              ))}
          </div>
        </div>
      </div>

      {/* main table section */}
      <Table cols={cols} renderRow={renderRow} data={resultsData} />

      {/* bottom - pagination */}
      <Pagination />
    </div>
  );
};

export default ResultsListPage;
