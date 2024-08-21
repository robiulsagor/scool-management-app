import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "Menu",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/teachers",
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/students",
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/parents",
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/classes",
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/lessons",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/exams",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/assignments",
      },
      {
        icon: "/attendence.png",
        label: "Attendence",
        href: "/attendence",
      },
      {
        icon: "/event.png",
        label: "events",
        href: "/events",
      },
      {
        icon: "/message.png",
        label: "messages",
        href: "/messages",
      },
      {
        icon: "/announcement.png",
        label: "announcements",
        href: "/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div>
      {menuItems.map((i, index) => (
        <div key={index} className="pt-5">
          <span className="uppercase text-gray-400 text-xs pb-1 hidden lg:block font-light ">
            {i.title}
          </span>
          {i.items.map((j, index) => (
            <Link
              key={index}
              href={j.href}
              className="flex items-center gap-4 justify-center lg:justify-start text-gray-500  py-2"
            >
              <Image
                src={j.icon}
                width={20}
                height={20}
                alt={j.label}
                // className="w-5 h-5"
              />
              <span className="hidden lg:block text-sm capitalize">
                {" "}
                {j.label}{" "}
              </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
