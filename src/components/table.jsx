import { PackageX } from "lucide-react";

const Table = ({ columns, rows, isLoading, skeletonRows = 8 }) => {
  return (
    <div className="mt-6 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse">
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

          <tbody>
            {isLoading
              ? Array.from({ length: skeletonRows }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-100">
                  {columns.map((column) => (
                    <td key={column.accessorKey} className="py-5">
                      <div className="h-4 rounded bg-gray-100 animate-pulse" />
                    </td>
                  ))}
                </tr>
              ))
              : rows.map((row) => (
                <tr
                  key={row.shipping_id}
                  className="transition border-b border-gray-100 hover:bg-gray-50"
                >
                  {columns.map((column) => {
                    const value = row[column.accessorKey];
                    return (
                      <td
                        key={column.accessorKey}
                        className="py-5 text-sm text-gray-600"
                      >
                        {column.cell ? column.cell({ value, row }) : value}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {!isLoading && rows.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-2 py-16 text-gray-400">
          <PackageX size={32} />
          <p className="text-sm">No shipments match your search.</p>
        </div>
      )}
    </div>
  );
};

export default Table;
