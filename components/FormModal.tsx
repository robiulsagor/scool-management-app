"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// import TeacherForm from "./form/TeacherForm";
// import StudentForm from "./form/StudentForm";

const TeacherForm = dynamic(() => import("./form/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./form/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "result"
    | "assignment"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const bgColor =
    type === "create"
      ? "bg-sagorYellow "
      : type === "update"
      ? "bg-sky"
      : "bg-sagorPurple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form className="p-4 flex flex-col gap-4">
        <p className="font-semibold text-lg text-gray-600">
          Are you sure you want to delete this {table}?
        </p>
        <button
          type="submit"
          className="bg-red-800 text-white px-4 py-2 rounded-md border-none w-max self-center"
        >
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${bgColor} rounded-full flex items-center justify-center cursor-pointer w-8 h-8`}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>

      {open && (
        <div className="absolute top-0 right-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-4 relative rounded-md w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />

            {/* modal close button */}
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/close.png"
                width={20}
                height={20}
                alt="close"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
