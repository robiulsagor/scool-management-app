import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="border border-gray-300  items-center gap-2 px-2 rounded-full w-full md:w-[280px] lg:w-[200px]  flex md:self-end md:justify-end">
      <Image
        src="/search.png"
        width={10}
        height={10}
        alt="search"
        className="w-3 h-3 opacity-50"
      />
      <input
        type="text"
        name=""
        id=""
        className=" outline-none bg-transparent text-xs text-gray-700 p-1 w-full"
        placeholder="Search..."
      />
    </div>
  );
};

export default TableSearch;
