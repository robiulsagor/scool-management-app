import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full p-2 flex items-center justify-between ">
      {/* search input */}
      <div className="border border-gray-300 hidden md:flex items-center gap-2 px-2 rounded-full ">
        <Image
          src="/search.png"
          width={10}
          height={10}
          alt="search"
          className="w-4 h-4 opacity-50"
        />
        <input
          type="text"
          name=""
          id=""
          className="w-[280px] outline-none bg-transparent text-sm text-gray-700 p-2"
          placeholder="Search..."
        />
      </div>

      {/* right menu */}
      <div className="flex gap-6 items-center justify-end w-full">
        <div className="bg-white w-7 h-7 flex items-center  justify-center rounded-full cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="message" />
        </div>
        <div className="bg-white w-7 h-7 flex items-center justify-center rounded-full cursor-pointer relative">
          <Image
            src="/announcement.png"
            width={20}
            height={20}
            alt="announcement"
          />
          <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ">
            1
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="text-sm text-gray-600 font-semibold">Sagor Islam</h3>
          <span className="text-xs text-gray-400">Student</span>
        </div>
        <div className="bg-emerald-800 w-7 h-7 flex items-center  justify-center rounded-full cursor-pointer">
          <Image
            src="/avatar.png"
            width={36}
            height={36}
            alt="avatar"
            className="rounded-full ring-4 ring-sky-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
