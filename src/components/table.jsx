const Table = ({ columns, rows }) => {
  return (
    <div className="mt-6 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b border-gray-100">
              {columns.map((column) => (
                <th
                  key={column.accessorKey}
                  className="py-4 text-sm font-semibold text-left text-gray-800"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="transition border-b border-gray-100 hover:bg-gray-50"
              >
                {columns.map((column) => (
                  <td
                    key={column.accessorKey}
                    className="py-5 text-sm text-gray-600"
                  >
                    {column.cell
                      ? column.cell({
                          getValue: () => row[column.accessorKey],
                          row,
                        })
                      : row[column.accessorKey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
