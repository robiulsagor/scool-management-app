import React from "react";

const Table = ({
  cols,
  renderRow,
  data,
}: {
  cols: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left font-semibold text-sm text-gray-600 p-4">
          {cols.map((field, index) => (
            <th key={index} className={`${field.className}`}>
              {field.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>{data.map((item, index) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
