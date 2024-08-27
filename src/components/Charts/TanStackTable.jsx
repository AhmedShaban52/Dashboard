import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { USERS } from "./TableData";
  import { useState } from "react";
  import DownloadBtn from "./DownloadBtn";
  import DebouncedInput from "./DebouncedInput";
  import { SearchIcon } from "../Charts/Icons/Icons.jsx";

  
  const TanStackTable = () => {
    const columnHelper = createColumnHelper();
  
    const columns = [
      columnHelper.accessor("", {
        id: "S.No",
        cell: (info) => <span>{info.row.index + 1}</span>,
        header: "S.No",
      }),
      columnHelper.accessor("profile", {
        cell: (info) => (
          <img
            src={info?.getValue()}
            alt="..."
            className="rounded-full w-10 h-10 object-cover"
          />
        ),
        header: "Profile",
      }),
      columnHelper.accessor("firstName", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "First Name",
      }),
      columnHelper.accessor("lastName", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Last Name",
      }),
      columnHelper.accessor("age", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Age",
      }),
      columnHelper.accessor("visits", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Visits",
      }),
      columnHelper.accessor("progress", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Progress",
      }),
    ];
    const [data] = useState(() => [...USERS]);
    const [globalFilter, setGlobalFilter] = useState("");
  
    const table = useReactTable({
      data,
      columns,
      state: {
        globalFilter,
      },
      getFilteredRowModel: getFilteredRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
  
    return (
      <div className="p-2 max-w-5xl  text-white fill-gray-400 overflow-auto">
        <div className="flex justify-between mb-2">
          <div className="w-full flex items-center gap-1">
            <SearchIcon />
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
              placeholder="Search all columns..."
            />
          </div>
          <DownloadBtn data={data} fileName={"peoples"} />
        </div>
        <table className="dark:border-[1px] dark:border-[#2d3234] w-full text-left ">
          <thead className=" text-center dark:border-[#2d3234] bg-indigo-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} >
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="  border-[#2d3234] capitalize  px-3 py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`
                  ${i % 2 === 0 ? "text-center dark:bg-gray-900 text-black border dark:border-[1px] dark:border-[#2d3234]" : "text-center text-black  dark:bg-gray-800 border dark:border-[1px] dark:border-[#2d3234]"}
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2 text-black dark:text-white">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* pagination */}
        <div className="flex items-center md:justify-end mt-2 gap-2">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300  text-black dark:text-white px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300   text-black dark:text-white px-2 disabled:opacity-30"
          >
            {">"}
          </button>
  
          <span className="flex items-center gap-1">
            <div className="text-black dark:text-white">Page</div>
            <strong className=" text-black  dark:text-white">
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1 text-black dark:text-white">
            | Go to page:
            <input
              
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16  text-black dark:text-white dark:bg-transparent "
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2  dark:text-white text-black dark:bg-black outline-none border dark:border-[#2d3234]"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize} className="bg-white dark:bg-secondary-dark-bg  dark:text-white duration-700" >
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default TanStackTable;