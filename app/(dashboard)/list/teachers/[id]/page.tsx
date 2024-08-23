import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="p-4 rounded-lg flex-1 flex flex-col xl:flex-row gap-4">
      {/* left */}
      <div className="w-full xl:w-2/3 ">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user card */}
          <div className="bg-sky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover"
                alt=""
              />
            </div>

            <div className="w-2/3 flex flex-col gap-4 justify-between">
              <h2 className="text-xl font-semibold">Sagor Islam</h2>

              {role === "admin" && (
                <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />
              )}

              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
              <div className="flex items-center gap-2 justify-between flex-wrap text-[12px] font-medium pr-2">
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3  whitespace-nowrap">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2022</span>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>sag@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3  whitespace-nowrap">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 235 6789</span>
                </div>
              </div>
            </div>
          </div>

          {/* small card */}
          <div className="flex-1 flex flex-wrap justify-between gap-4">
            <div className="flex items-center gap-4 bg-white p-4 w-full md:w-[48%] xl:w-[45%] 2xl:2w-[48%] rounded-lg">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={20}
                height={20}
                className="w-6 h-6"
              />
              <div className="flex flex-col ">
                <h1 className="font-semibold text-xl">90%</h1>
                <h2 className="text-sm text-gray-500">Attendance</h2>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 w-full md:w-[48%] xl:w-[45%] 2xl:2w-[48%] rounded-lg">
              <Image
                src="/singleBranch.png"
                alt=""
                width={20}
                height={20}
                className="w-6 h-6"
              />
              <div className="flex flex-col  ">
                <h1 className="font-semibold text-xl">2</h1>
                <h2 className="text-sm text-gray-500">Branches</h2>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 w-full md:w-[48%] xl:w-[45%] 2xl:2w-[48%] rounded-lg">
              <Image
                src="/singleLesson.png"
                alt=""
                width={20}
                height={20}
                className="w-6 h-6"
              />
              <div className="flex flex-col ">
                <h1 className="font-semibold text-xl">9</h1>
                <h2 className="text-sm text-gray-500">Lessons</h2>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 w-full md:w-[48%] xl:w-[45%] 2xl:2w-[48%] rounded-lg">
              <Image
                src="/singleClass.png"
                alt=""
                width={20}
                height={20}
                className="w-6 h-6"
              />
              <div className="flex flex-col ">
                <h1 className="font-semibold text-xl">6</h1>
                <h2 className="text-sm text-gray-500">Classes</h2>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-4 p-4 bg-white rounded-md h-[800px]">
          <h1 className="text-gray-700 text-lg font-semibold">
            Teacher's Schedule
          </h1>

          <BigCalendar />
        </div>
      </div>

      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4 ">
        {/* shortcut links */}
        <div className=" p-4 bg-white">
          <h1 className="text-lg text-gray-800 font-semibold">
            Shortcut Links
          </h1>
          <div className="mt-4 flex flex-wrap gap-2 gap-y-3 text-xs">
            <Link
              href="/"
              className="px-2 py-1 rounded-md bg-skyLight hover:underline"
            >
              Teacher's Classes
            </Link>
            <Link
              href="/"
              className="px-2 py-1 rounded-md bg-sagorPurpleLight hover:underline"
            >
              Teacher's Students
            </Link>
            <Link
              href="/"
              className="px-2 py-1 rounded-md bg-sagorYellowLight hover:underline"
            >
              Teacher's Lessons
            </Link>
            <Link
              href="/"
              className="px-2 py-1 rounded-md bg-violet-800 bg-opacity-10 hover:underline"
            >
              Teacher's Exams
            </Link>
            <Link
              href="/"
              className="px-2 py-1 rounded-md bg-lime-700 bg-opacity-15 hover:underline"
            >
              Teacher's Assignments
            </Link>
          </div>
        </div>

        {/* performance */}
        <Performance />

        <Announcement />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
