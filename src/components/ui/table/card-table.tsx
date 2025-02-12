'use client';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  totalItems: number;
  pageSizeOptions?: number[];
}

export function CardTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  
  
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true
  });
  
  return (
    <div className="space-y-4 ">
      <ScrollArea className=" relative bg-white rounded-b-lg border overflow-auto">
        <div className="sticky  top-0  z-10 shadow">
          <Table className=''>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead className={`w-2/12 ${header.id === 'actions' ? "text-right" : "" } !px-5  bg-[#F9FAFB] text-nowrap !py-4`} key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
          </Table>
        </div>
        <Table>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows
                .filter(row => row.original !== null)
                .map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell className="w-2/12 select-none font-medium text-[#111928] !px-5 py-4" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      
    </div>
  );
}
