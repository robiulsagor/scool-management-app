import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  name: string;
  register: any;
  error?: FieldError;
  defaultValue?: any;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  label,
  type = "text",
  name,
  register,
  error,
  defaultValue,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label htmlFor={name} className="text-xs text-gray-500">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(name)}
        className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm"
        defaultValue={defaultValue}
        {...inputProps}
      />
      {error?.message && (
        <p className="text-xs text-red-700 "> {error.message.toString()} </p>
      )}
    </div>
  );
};

export default InputField;
