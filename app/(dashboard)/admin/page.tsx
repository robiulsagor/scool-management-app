// import StudentChart from "@/components/StudentChart";
import Announcement from "@/components/Announcement";
import AttendanceCharts from "@/components/AttendanceCharts";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import StudentChart from "@/components/StudentChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row flex-1">
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        <div className="w-full  flex gap-4 flex-wrap  justify-between">
          <UserCard type="students" />
          <UserCard type="teachers" />
          <UserCard type="parents" />
          <UserCard type="staffs" />
        </div>

        {/* middle chart */}
        <div className=" flex flex-col md:flex-row flex-wrap gap-y-2  items-stretch place-items-stretch justify-items-stretch ">
          <div className="  w-full lg:w-1/2 xl:w-1/3 h-[450px]">
            <StudentChart />
          </div>

          <div className="  w-full lg:w-1/2  xl:w-2/3 h-[450px]">
            <AttendanceCharts />
          </div>
        </div>

        {/* bottom chart */}
        <div className=" w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex-1 flex flex-col gap-8">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
