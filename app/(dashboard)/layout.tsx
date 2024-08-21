import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-2 md:p-4">
        <Link
          href="/"
          className="flex items-center gap-2 justify-center lg:justify-start"
        >
          <Image
            src="/logo.png"
            width={30}
            height={30}
            alt=""
            className="w-5 h-5 object-cover"
          />
          <span className="hidden lg:block text-gray-600 font-medium">
            ManageSchool
          </span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll p-2">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
