import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";

const ParentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row flex-1">
      <div className="w-full xl:w-2/3 flex flex-col gap-6">
        <h1 className="text-xl text-gray-700 font-bold">Schedule (John)</h1>
        <BigCalendar />
      </div>

      <div className="w-full xl:w-1/3 flex-1 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
};

export default ParentPage;
