import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className=" odd:bg-sagorPurple even:bg-sagorYellow bg-opacity-10 flex-1 rounded-2xl p-4 flex flex-col gap-2 ">
      <div className="flex items-center justify-between">
        <span className="bg-white px-2 py-1 text-[10px] text-green-600 rounded-full">
          2024/25ds
        </span>
        <Image
          src="/more.png"
          width={20}
          height={20}
          alt=""
          className="cursor-pointer hover:opacity-70"
        />
      </div>
      <p className="text-2xl font-semibold">1,234</p>
      <p className="capitalize font-medium text-sm text-gray-600">{type}</p>
    </div>
  );
};

export default UserCard;
