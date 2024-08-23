const Pagination = () => {
  return (
    <div className="p-4 mt-5 flex items-center justify-between text-xs">
      <button
        disabled
        className="font-semibold px-4 py-2 text-gray-600 bg-gray-300 text-xs rounded-sm disabled:cursor-not-allowed disabled:opacity-50 "
      >
        Prev
      </button>

      <div className="flex gap-3 items-center font-semibold">
        <div className="py-2 px-3 bg-sky rounded-md">1</div>
        <div className="cursor-pointer py-2 px-3 rounded-md hover:bg-gray-300">
          2
        </div>
        <div className="cursor-pointer py-2 px-3 rounded-md hover:bg-gray-300">
          3
        </div>
        <div>...</div>
        <div className="cursor-pointer py-2 px-3 rounded-md hover:bg-gray-300">
          10
        </div>
      </div>

      <button className="font-semibold px-4 py-2 text-gray-600 bg-gray-300 text-xs rounded-sm disabled:cursor-not-allowed disabled:opacity-50 ">
        Next
      </button>
    </div>
  );
};

export default Pagination;
